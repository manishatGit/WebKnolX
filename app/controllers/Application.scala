package controllers
import play.api._
import play.api.mvc._
import org.joda.time.LocalDateTime
import play.api._
import play.api.Play.current
import play.api.data._
import play.api.data.Forms._
import play.api.db.slick._
import play.api.mvc._
import views._
import models.KnolXUser
import models.KnolXUserTable
import models.UserLogin
import java.util.Date
import play.api.data.validation.Constraint
import play.api.data.validation.ValidationError
import play.api.data.validation.Invalid
import play.api.data.validation.Valid

/**
 * Controller: Application handles all possible page controls in project webKnolX
 */

object Application extends Controller {
  def index = DBAction { implicit request =>
    //Check for session existence
    request.session.get("userEmail") match {
      case None     => Ok(views.html.loginForm(userLoginForm)).withNewSession
      case userMail => Ok(views.html.userLoggedIn(userMail.get))
    }
  }
  
  val Home = Redirect(routes.Application.index)
  /**
   * Defines a custom Constraint to check email
   */

  /**
   * password Regular Expression
   */
  val allNumbers = """\d*""".r
  val allLetters = """[A-Za-z]*""".r

  /**
   * Defines the passwordCheck Constraint
   */
  val passwordCheckConstraint: Constraint[String] = Constraint("constraints.passwordcheck")({
    plainText =>
      val errors = plainText match {
        case allNumbers() => Seq(ValidationError("Password must contain letters as well"))
        case allLetters() => Seq(ValidationError("Password must contain numbers as well"))
        case _            => Nil
      }
      if (errors.isEmpty) {
        Valid
      } else {
        Invalid(errors)
      }
  })

  /**
   *  Mapping KnolXUser form
   */

  val knolXUserForm = Form(
    mapping(
      "id" -> ignored(Some(0): Option[Int]),
      "name" -> nonEmptyText,
      "address" -> text,
      "company" -> nonEmptyText,
      "email" -> email,
      "password" -> nonEmptyText.verifying(passwordCheckConstraint),
      "phone" -> nonEmptyText,
      "userType" -> ignored(2),
      "created" -> ignored(new Date()),
      "updated" -> ignored(new Date()))(KnolXUser.apply)(KnolXUser.unapply))

  /**
   *  Mapping userLogin form
   */
  val userLoginForm = Form(
    mapping(
      "email" -> email,
      "password" -> nonEmptyText)(UserLogin.apply)(UserLogin.unapply))

  /**
   * Handles the submit of 'Signu Up'
   * return: Page UserLogged In
   */
  def register = DBAction { implicit request =>
    try {
      knolXUserForm.bindFromRequest.fold(
        formWithErrors => BadRequest(html.signUp(formWithErrors)),
        knolXUser => {
          KnolXUserTable.insertKnolXUser(knolXUser)
          Ok(views.html.userLoggedIn(knolXUser.email))
        })
    } catch {
      case e: Exception => Redirect("/signUP").flashing("error" -> "User Exists")

    }

  }

  /**
   * Handles the  show Update form of 'Update KnolXUser'
   * @return: update Profile Page
   */
  def showUpdate(email: String) = DBAction { implicit request =>
    KnolXUserTable.getKnolXUserByEmail(email) match {
      case knolXUser => Ok(html.updateProfile(knolXUserForm.fill(knolXUser)))
    }
  }
  /**
   * Handles the submit of 'Update KnolXUser'
   */

  def update() = DBAction { implicit request =>
    try {
      knolXUserForm.bindFromRequest.fold(
        formWithErrors => BadRequest(html.updateProfile(formWithErrors)),
        knolxUser => {
          val userEmail = request.session.get("userEmail").get
          val oldUser = KnolXUserTable.getKnolXUserByEmail(userEmail)
          val userId = KnolXUserTable.getKnolXUserByEmail(userEmail).id
          val knolderToUpdate: KnolXUser = knolxUser.copy(userId, created = oldUser.created)
          knolderToUpdate.updated = new Date()
          KnolXUserTable.updateKnolXUser(knolderToUpdate)
          Ok(views.html.userLoggedIn(knolderToUpdate.email))
        })
    }catch {
      case e: Exception => Redirect("/update").flashing("error" -> "User Exists")

    }
  }
  
  /**
   * Handles Cancel update
   */
  def cancelUpdate(email: String) = Action { implicit request =>

    Ok(views.html.userLoggedIn(email))
  }

  /**
   * Displays the 'new KnolXUser form'.
   */

  def createKnolXUser = DBAction { implicit request =>
    Ok(views.html.signUp(knolXUserForm))
  }

  /**
   * Shows User Login. form
   */
  def showLogin = DBAction { implicit request =>
    Ok(views.html.loginForm(userLoginForm)).withNewSession
  }

  /**
   * Handles UserLogin form submission
   */

  def login = DBAction { implicit request =>
    userLoginForm.bindFromRequest.fold(
      formWithErrors => BadRequest(views.html.loginForm(formWithErrors)),
      knolXUser => {
        if (KnolXUserTable.isUserValid(knolXUser.email, knolXUser.password)) {
          val formData: Map[String, Seq[String]] = request.body.asFormUrlEncoded.getOrElse(Map())
          val email = formData.getOrElse("email", Seq("default")).head
          val MyCookie = Cookie("email", email, Some(5000))
          val timeOut = MyCookie.maxAge.get
          Ok(views.html.userLoggedIn(knolXUser.email)).withSession("userEmail" -> email, "timeout" -> "5000")
        } else {
          Ok("Invalid User")
        }
      })
  }

  /**
   * Shows User Logged out
   */

  def signOut = Action {
    Ok(views.html.userLoggedOut("Signed Out")).withNewSession
  }
  /**
   * This action is used to handle Ajax request
   *
   * @return
   */
  def ajaxCall = Action { implicit request =>
    Ok("Ajax Call!")
  }
}

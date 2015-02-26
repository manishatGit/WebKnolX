package models
import play.api.db.slick.Config.driver.simple._
import scala.collection.immutable.List
import java.util._
import scala.slick.lifted.ProvenShape
import java.sql.{ Date => SqlDate }

/**
 * @author manish@knoldus.com
 */

/** case class of login credentials
 *       
 */

case class UserLogin(val email: String, val password: String)

/**
 * Case class KnolxUser
 */
case class KnolXUser(val id: Option[Int], val name: String, val address: String, val company: String, val email: String, val password: String, val phone: String, val userType: Int, created: Date, updated: Date)

/**
 * Mapper Class KnolxUser Table
 *
 */
//Defining an implicit java.util to sql Date Mapper Function

class KnolXUserMapper(tag: Tag) extends Table[KnolXUser](tag, "KnolXUser") {

  //Defining an implicit java.util to sql Date Mapper Function
  implicit val util2sqlDateMapper = MappedColumnType.base[java.util.Date, java.sql.Date](
    { utilDate => new java.sql.Date(utilDate.getTime()) },
    { sqlDate => new java.util.Date(sqlDate.getTime()) })

  def id: Column[Option[Int]] = column[Int]("id", O.PrimaryKey, O.AutoInc)
  def name: Column[String] = column[String]("name", O.NotNull)
  def address: Column[String] = column[String]("address")
  def company: Column[String] = column[String]("company", O.NotNull)
  def email: Column[String] = column[String]("email", O.NotNull)
  def password: Column[String] = column[String]("password", O.NotNull)
  def phone: Column[String] = column[String]("phone", O.NotNull)
  def userType: Column[Int] = column[Int]("userType", O.NotNull)
  def created: Column[Date] = column[Date]("created", O.NotNull)
  def updated: Column[Date] = column[Date]("updated", O.NotNull)
  def * = (id, name, address, company, email, password, phone, userType, created, updated) <> (KnolXUser.tupled, KnolXUser.unapply)
}
object KnolXUserTable {
  val KnolXUserTableQuery = TableQuery[KnolXUserMapper]

  /**
   * ************************************************************************************
   * Inserts the  KnolXUser record into the database                                      *
   * ************************************************************************************
   * @param: knolder record to be deleted
   */
  def insertKnolXUser(knolXUser: KnolXUser)(implicit s: Session): Int = {
    KnolXUserTableQuery.insert(knolXUser)
  }

  /**
   * ************************************************************************************
   * Returns the  KnolXUser record by Email                                *
   * ************************************************************************************
   * @param: KnolXUSer email
   */

  def getKnolXUserByEmail(email: String)(implicit session: Session): KnolXUser = {
    KnolXUserTableQuery.filter { x => x.email === email }.list.head
  }
  /**
   * ************************************************************************************
   * Updates the  KnolXUser record in the database table                                *
   * ************************************************************************************
   * @param: Knolder Record
   */

  def updateKnolXUser(knolXUser: KnolXUser)(implicit session: Session) = {
    KnolXUserTableQuery.filter { x => x.id === knolXUser.id }.update(knolXUser)
  }

  /**
   * ************************************************************************************
   * Returns true if the KnolXUser found with the given email addres                    *
   * ************************************************************************************
   * @param: email of the KnolXUser
   */
  def isUserEmail(email:String)(implicit session: Session):Boolean={
     KnolXUserTableQuery.filter { x => x.email === email }.list.size>0
  }
  
  
} 

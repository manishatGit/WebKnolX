/**
 * Controller: EmpController handles the employee data rendering on the view
 */

var myapp = angular.module("myapp", [])
myapp.controller('EmpController', [
		'$scope',
		"$filter",
		function($scope, $filter) {
			var employees = [ {
				"name" : "Duran",
				"company" : "LIQUICOM",
				"email" : "durandunlap@liquicom.com",
				"phone" : "+1 (837) 564-2318",
				"date" : "Sat May 03 1986 07:50:53 GMT+0530 (IST)"
			}, {
				"name" : "Mitzi",
				"company" : "SQUISH",
				"email" : "mitzidunlap@squish.com",
				"phone" : "+1 (915) 480-2432",
				"date" : "Mon Jan 07 2013 15:47:54 GMT+0530 (IST)"
			}, {
				"name" : "Hays",
				"company" : "BLUPLANET",
				"email" : "haysdunlap@bluplanet.com",
				"phone" : "+1 (894) 524-2446",
				"date" : "Tue Oct 08 1996 08:42:16 GMT+0530 (IST)"
			}, {
				"name" : "Frost",
				"company" : "PERMADYNE",
				"email" : "frostdunlap@permadyne.com",
				"phone" : "+1 (854) 541-3406",
				"date" : "Wed Jul 13 1988 02:02:41 GMT+0530 (IST)"
			}, {
				"name" : "Durham",
				"company" : "ZEAM",
				"email" : "durhamdunlap@zeam.com",
				"phone" : "+1 (904) 469-3227",
				"date" : "Tue Aug 08 1989 20:29:43 GMT+0530 (IST)"
			}, {
				"name" : "Virgie",
				"company" : "SLOFAST",
				"email" : "virgiedunlap@slofast.com",
				"phone" : "+1 (992) 418-3810",
				"date" : "Tue Mar 25 1997 09:39:07 GMT+0530 (IST)"
			}, {
				"name" : "Barnett",
				"company" : "ZILLAR",
				"email" : "barnettdunlap@zillar.com",
				"phone" : "+1 (844) 432-3052",
				"date" : "Wed Nov 25 1998 00:45:02 GMT+0530 (IST)"
			}, {
				"name" : "Rodriquez",
				"company" : "NETILITY",
				"email" : "rodriquezdunlap@netility.com",
				"phone" : "+1 (822) 506-2306",
				"date" : "Wed Jun 15 2005 06:45:08 GMT+0530 (IST)"
			}, {
				"name" : "Potter",
				"company" : "ORONOKO",
				"email" : "potterdunlap@oronoko.com",
				"phone" : "+1 (950) 494-2476",
				"date" : "Sat May 05 2012 23:15:43 GMT+0530 (IST)"
			}, {
				"name" : "Buchanan",
				"company" : "EVENTAGE",
				"email" : "buchanandunlap@eventage.com",
				"phone" : "+1 (892) 541-3405",
				"date" : "Fri Nov 28 1975 06:23:34 GMT+0530 (IST)"
			}, {
				"name" : "Berger",
				"company" : "ONTALITY",
				"email" : "bergerdunlap@ontality.com",
				"phone" : "+1 (931) 412-3673",
				"date" : "Mon Jul 14 1975 07:02:41 GMT+0530 (IST)"
			}, {
				"name" : "Roslyn",
				"company" : "GEEKOL",
				"email" : "roslyndunlap@geekol.com",
				"phone" : "+1 (965) 460-3457",
				"date" : "Tue Oct 06 1987 01:01:27 GMT+0530 (IST)"
			}, {
				"name" : "Lessie",
				"company" : "PYRAMI",
				"email" : "lessiedunlap@pyrami.com",
				"phone" : "+1 (848) 495-3911",
				"date" : "Sun Sep 25 2005 21:26:36 GMT+0530 (IST)"
			}, {
				"name" : "Genevieve",
				"company" : "ORBIFLEX",
				"email" : "genevievedunlap@orbiflex.com",
				"phone" : "+1 (912) 449-3015",
				"date" : "Mon Nov 28 1977 07:10:34 GMT+0530 (IST)"
			}, {
				"name" : "Marquez",
				"company" : "PASTURIA",
				"email" : "marquezdunlap@pasturia.com",
				"phone" : "+1 (845) 516-3438",
				"date" : "Mon Sep 17 2012 03:27:26 GMT+0530 (IST)"
			}, {
				"name" : "Robertson",
				"company" : "ZAYA",
				"email" : "robertsondunlap@zaya.com",
				"phone" : "+1 (984) 401-3006",
				"date" : "Mon Mar 19 2007 13:23:06 GMT+0530 (IST)"
			}, {
				"name" : "Castro",
				"company" : "STREZZO",
				"email" : "castrodunlap@strezzo.com",
				"phone" : "+1 (954) 438-2787",
				"date" : "Mon Jul 19 1976 07:08:48 GMT+0530 (IST)"
			}, {
				"name" : "Garcia",
				"company" : "NIMON",
				"email" : "garciadunlap@nimon.com",
				"phone" : "+1 (842) 491-2861",
				"date" : "Tue Oct 27 1987 20:24:48 GMT+0530 (IST)"
			}, {
				"name" : "Bradshaw",
				"company" : "GINKOGENE",
				"email" : "bradshawdunlap@ginkogene.com",
				"phone" : "+1 (975) 470-3659",
				"date" : "Tue Aug 04 1992 16:13:34 GMT+0530 (IST)"
			}, {
				"name" : "Amie",
				"company" : "BULLJUICE",
				"email" : "amiedunlap@bulljuice.com",
				"phone" : "+1 (835) 488-2630",
				"date" : "Tue May 24 1994 13:18:28 GMT+0530 (IST)"
			}, {
				"name" : "Quinn",
				"company" : "INSURITY",
				"email" : "quinndunlap@insurity.com",
				"phone" : "+1 (915) 432-3815",
				"date" : "Wed Nov 22 1972 02:03:06 GMT+0530 (IST)"
			}, {
				"name" : "Holt",
				"company" : "VERTIDE",
				"email" : "holtdunlap@vertide.com",
				"phone" : "+1 (958) 538-2780",
				"date" : "Tue Aug 23 1983 22:27:36 GMT+0530 (IST)"
			}, {
				"name" : "Sharpe",
				"company" : "ENERSAVE",
				"email" : "sharpedunlap@enersave.com",
				"phone" : "+1 (973) 507-3154",
				"date" : "Fri Nov 01 1974 12:57:03 GMT+0530 (IST)"
			}, {
				"name" : "Patrice",
				"company" : "NETPLAX",
				"email" : "patricedunlap@netplax.com",
				"phone" : "+1 (945) 521-2003",
				"date" : "Sat Apr 29 1989 13:17:35 GMT+0530 (IST)"
			}, {
				"name" : "Anastasia",
				"company" : "ZILPHUR",
				"email" : "anastasiadunlap@zilphur.com",
				"phone" : "+1 (991) 542-3603",
				"date" : "Tue May 11 2004 08:31:11 GMT+0530 (IST)"
			}, {
				"name" : "Alexis",
				"company" : "ROTODYNE",
				"email" : "alexisdunlap@rotodyne.com",
				"phone" : "+1 (936) 536-2343",
				"date" : "Sat Aug 09 1986 19:08:35 GMT+0530 (IST)"
			}, {
				"name" : "Kaufman",
				"company" : "QUANTASIS",
				"email" : "kaufmandunlap@quantasis.com",
				"phone" : "+1 (821) 465-2602",
				"date" : "Mon Mar 22 1971 06:19:36 GMT+0530 (IST)"
			}, {
				"name" : "Amalia",
				"company" : "TRIPSCH",
				"email" : "amaliadunlap@tripsch.com",
				"phone" : "+1 (952) 532-2210",
				"date" : "Sat Jun 16 2007 03:49:46 GMT+0530 (IST)"
			}, {
				"name" : "Mallory",
				"company" : "TERSANKI",
				"email" : "mallorydunlap@tersanki.com",
				"phone" : "+1 (981) 454-3097",
				"date" : "Fri Oct 11 1996 21:27:51 GMT+0530 (IST)"
			}, {
				"name" : "Wyatt",
				"company" : "MEDICROIX",
				"email" : "wyattdunlap@medicroix.com",
				"phone" : "+1 (864) 598-3625",
				"date" : "Sat May 04 1974 22:13:03 GMT+0530 (IST)"
			}, {
				"name" : "Le",
				"company" : "QUIZMO",
				"email" : "ledunlap@quizmo.com",
				"phone" : "+1 (823) 507-2865",
				"date" : "Sat Apr 25 1987 08:43:16 GMT+0530 (IST)"
			}, {
				"name" : "Horne",
				"company" : "WAZZU",
				"email" : "hornedunlap@wazzu.com",
				"phone" : "+1 (951) 502-3876",
				"date" : "Wed Nov 16 1988 07:04:40 GMT+0530 (IST)"
			}, {
				"name" : "Cervantes",
				"company" : "GINKLE",
				"email" : "cervantesdunlap@ginkle.com",
				"phone" : "+1 (863) 441-3309",
				"date" : "Thu May 25 2006 11:41:35 GMT+0530 (IST)"
			}, {
				"name" : "Kitty",
				"company" : "HONOTRON",
				"email" : "kittydunlap@honotron.com",
				"phone" : "+1 (984) 435-3873",
				"date" : "Thu Feb 18 2010 22:13:08 GMT+0530 (IST)"
			}, {
				"name" : "Campbell",
				"company" : "PROWASTE",
				"email" : "campbelldunlap@prowaste.com",
				"phone" : "+1 (930) 401-2507",
				"date" : "Thu Sep 16 1982 00:37:03 GMT+0530 (IST)"
			}, {
				"name" : "Gross",
				"company" : "HIVEDOM",
				"email" : "grossdunlap@hivedom.com",
				"phone" : "+1 (935) 479-2657",
				"date" : "Thu Nov 15 1984 05:05:41 GMT+0530 (IST)"
			}, {
				"name" : "Levine",
				"company" : "DARWINIUM",
				"email" : "levinedunlap@darwinium.com",
				"phone" : "+1 (840) 433-3351",
				"date" : "Tue Apr 08 1997 10:19:33 GMT+0530 (IST)"
			}, {
				"name" : "Herrera",
				"company" : "EARBANG",
				"email" : "herreradunlap@earbang.com",
				"phone" : "+1 (908) 546-3444",
				"date" : "Mon Jun 24 1996 06:50:21 GMT+0530 (IST)"
			}, {
				"name" : "Weaver",
				"company" : "PROFLEX",
				"email" : "weaverdunlap@proflex.com",
				"phone" : "+1 (942) 410-2252",
				"date" : "Mon Oct 23 1995 11:02:05 GMT+0530 (IST)"
			}, {
				"name" : "Terry",
				"company" : "GEEKUS",
				"email" : "terrydunlap@geekus.com",
				"phone" : "+1 (968) 503-2188",
				"date" : "Mon Oct 19 2009 02:17:45 GMT+0530 (IST)"
			}, {
				"name" : "Jordan",
				"company" : "TECHMANIA",
				"email" : "jordandunlap@techmania.com",
				"phone" : "+1 (974) 597-2796",
				"date" : "Sat Aug 18 2012 21:15:33 GMT+0530 (IST)"
			}, {
				"name" : "Leach",
				"company" : "RAMJOB",
				"email" : "leachdunlap@ramjob.com",
				"phone" : "+1 (863) 508-2667",
				"date" : "Sat Jun 30 1979 20:21:25 GMT+0530 (IST)"
			}, {
				"name" : "Isabelle",
				"company" : "POLARAX",
				"email" : "isabelledunlap@polarax.com",
				"phone" : "+1 (909) 450-3469",
				"date" : "Sat Jun 22 1974 21:41:33 GMT+0530 (IST)"
			}, {
				"name" : "Joanne",
				"company" : "STEELTAB",
				"email" : "joannedunlap@steeltab.com",
				"phone" : "+1 (880) 599-3052",
				"date" : "Sat Oct 26 1996 12:09:53 GMT+0530 (IST)"
			}, {
				"name" : "Ramona",
				"company" : "ISONUS",
				"email" : "ramonadunlap@isonus.com",
				"phone" : "+1 (859) 575-2348",
				"date" : "Wed Jun 15 1977 16:39:01 GMT+0530 (IST)"
			}, {
				"name" : "Castillo",
				"company" : "JAMNATION",
				"email" : "castillodunlap@jamnation.com",
				"phone" : "+1 (895) 475-2362",
				"date" : "Tue Jul 03 1990 23:30:13 GMT+0530 (IST)"
			}, {
				"name" : "Shannon",
				"company" : "OMNIGOG",
				"email" : "shannondunlap@omnigog.com",
				"phone" : "+1 (978) 499-3212",
				"date" : "Tue Dec 12 1972 16:44:36 GMT+0530 (IST)"
			}, {
				"name" : "Blanca",
				"company" : "APEX",
				"email" : "blancadunlap@apex.com",
				"phone" : "+1 (952) 593-3644",
				"date" : "Wed Sep 01 1971 11:17:24 GMT+0530 (IST)"
			}, {
				"name" : "Sandy",
				"company" : "PULZE",
				"email" : "sandydunlap@pulze.com",
				"phone" : "+1 (887) 585-2144",
				"date" : "Tue Apr 21 1981 18:36:07 GMT+0530 (IST)"
			} ];
			// Initializing the reverse property = false;
			$scope.reverse = false
			// Initializing the defaultSearchField
			$scope.searchField = 'name'
			// Initializing the results with all datavalue by default
			$scope.results = employees;

			/*
			 * Method Sort filters the results by given field name as parameter.
			 */
			$scope.Sort = function(fieldName) {
				$scope.searchField=fieldName
				$scope.results = $filter('orderBy')(employees,
						$scope.searchField, $scope.reverse)
				if ($scope.searchField === fieldName && $scope.reverse) {
					$scope.reverse = $scope.reverse;
				} else {
					$scope.reverse = !$scope.reverse;
				}
			}
			/*Method isSortUp returns true if the order of the sort is
			 *true 
			 */
			$scope.isSortUp = function() {
				return $scope.reverse
			}
			/*Method isSortUp returns true if the order of the sort is
			 *false 
			 */
			$scope.isSortDown = function() {
				return !$scope.reverse
			}
		} ]);

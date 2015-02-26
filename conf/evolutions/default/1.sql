# --- Created by Slick DDL
# To stop Slick DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table "KnolXUser" ("id" SERIAL NOT NULL PRIMARY KEY,"name" VARCHAR(254) NOT NULL,"address" VARCHAR(254) NOT NULL,"company" VARCHAR(254) NOT NULL,"email" VARCHAR(254) NOT NULL,"password" VARCHAR(254) NOT NULL,"phone" VARCHAR(254) NOT NULL,"userType" INTEGER NOT NULL,"created" DATE NOT NULL,"updated" DATE NOT NULL);
create unique index "idx_a" on "KnolXUser" ("email");

# --- !Downs

drop table "KnolXUser";


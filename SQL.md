SQL

create database : create database database_name
drop database : drop database database_name
drop table : drop table table
select : select * from table_name
select distinct : select distinct col1 , col2 from table_name
conditional : select * from table_name where condition
        between : select * from tb_name where col_name val between val2
        And , Or , Not : where con1 And con2 or con3
        Like : select * from tb_name where col_name Like pattern

                a% => start with a 
                %a => end with a
                %aa% => find Values where aa at any position


select * from tb_name where country = "Germany" AND city = "Berlin"

Order By : select * from table_name Order by col_name ASC|DESC

Insert Values : Insert Into tb_name (col1 , col2 , col3 , ...) Values (val1 , vaql2 , val3 ..)
Update : Update tb_name SET col_name = val , col2 = val ... where condition
Delete : DELETE from tb_name where condition
Min , Max , Count , Avg , Max : select Min(col_name) from tb_name where condition

Join :
        Inner Join : get All same data

                select columns from table1 Inner Join table2 ON table1.col = table2.col

                Join Three Tables (a , b ,c) 

                    select a.col , b.col2 , c.col3 from (( a Inner Join b On a.col = b.col) Inner Join c on a.col = c.col)  


        Full Outer Join
        Left Join

            select col_name from table1 Left Join table2 on table1.col = table2.col 

        Right Join
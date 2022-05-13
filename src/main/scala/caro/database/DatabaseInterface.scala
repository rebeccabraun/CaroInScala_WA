package caro.database

import caro.dao.DAOInterface
import caro.model.gridComponent.BoardInterface
import caro.model.gridComponent.boardFullImpl.Board

trait DatabaseInterface :

 def safeToDB(dao: DAOInterface) : Unit
 
 def loadFromDB() : DAOInterface

end DatabaseInterface


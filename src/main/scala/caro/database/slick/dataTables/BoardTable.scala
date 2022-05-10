package caro.database.slick.dataTables

import slick.jdbc.MySQLProfile.api.*

class BoardTable(tag: Tag)  extends Table[(Int, Int, Int, Int, String, String, Int, Int)](tag, "BOARDS"):

  def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
  def width = column[Int]("width")
  def height = column[Int]("height")
  def moves = column[Int]("moves")
  def lastColor = column[String]("lastColor")
  def status = column[String]("status")
  def player1_id = column[Int]("player1")
  def player2_id = column[Int]("player2")
  
  override def * = (id, width, height, moves, lastColor, status, player1_id, player2_id)

end BoardTable



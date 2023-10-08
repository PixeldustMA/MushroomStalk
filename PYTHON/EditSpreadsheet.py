from openpyxl import load_workbook
import math
from Style import Style

class edit:
	def __init__(self, workbook, activeSheet, cell, num):
		self.WORKBOOK = workbook
		self.ACTIVE = activeSheet
		self.CELL = cell
		self.NUM = int(num)

	def insert(self):
		''' INSERT A NEW ROW'''

		self.ACTIVE.insert_rows(int(self.CELL))
	def alter(self, newValue, editable ):
		''' ALTER AN EXISTING CELL IN THE SPREADSHEET'''

		self.ACTIVE[editable] = newValue
	def styleSettings(self):
		''' CHANGE THE STYLE IN THE CLASS'''

		styleOptions = [
			"BlueStyle", "PinkStyle", 
			"GreenStyle", "OrangeStyle", 
			"PurpleStyle", "PaleBlueStyle", 
			"PalePinkStyle"]
		FiftyValue = math.floor(self.NUM / 50)
		if FiftyValue > 6:
			index = math.floor(FiftyValue % 6)
		else:
			index = FiftyValue

		decorate = Style(self.WORKBOOK, self.NUM, str(styleOptions[index]), self.CELL, self.ACTIVE)
		decorate.styles()
		decorate.setStyle()
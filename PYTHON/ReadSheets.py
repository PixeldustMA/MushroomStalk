class read:

	def __init__(self):
		pass

	def fetchCoordinates(self, num, step):

		'''Get the required cell coordinates'''

		finalCharacter = len(num) - 1
		col = num[0]
		newValue = int(num[finalCharacter]) + step
		return col + num[0:finalCharacter] + str(newValue)

	def fetchHeaders(self, active_worksheet):
		headers = {}
		for range in active_worksheet.merged_cells.ranges:
			coords = range.start_cell.coordinate
			details = range.start_cell.value
			headers[coords] = details
		return headers

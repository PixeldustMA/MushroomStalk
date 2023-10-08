import json
from pathlib import Path

class bundleTree:

	def __init__(self, characterName, tag, residentPath):
		self.CHARACTER_NAME = characterName
		self.CHARACTER_LIST = {}
		self.RECORD = {
			"CHARNAME": "Placeholder"
		}
		self.TAG = tag
		self.RESIDENT_PATH = residentPath

	def runMatch(self):
		''' FIND REQUESTED FILE'''
		print(json.dumps("Find correct File"))

		self.CHARACTER_LIST = self.fetchFile()
		self.matchCharacter()
		return self.buildTree()
	def fetchFile(self):
		''' FETCH CHARACTER LIST'''

		f = open('PYTHON\MeatCharacters.json')
		data = json.load(f)
		return data
	def matchCharacter(self):
		''' MATCH CHARACTER WITH LOCATION'''
		print(json.dumps("Matching locations"))
		partList = self.CHARACTER_LIST.keys()
		for num in partList:
			partSections = self.CHARACTER_LIST[num].keys()
			for section in partSections:
				groups = self.CHARACTER_LIST[num][section].keys()
				for character in groups:
					bookNums = self.CHARACTER_LIST[num][section][character].keys()
					for book in bookNums:
						finalSearch = self.CHARACTER_LIST[num][section][character][book]
						self.RECORD["j"] = finalSearch
						if finalSearch == self.CHARACTER_NAME:
							self.RECORD["CHAR_NAME"] = finalSearch
							self.RECORD["SECTION"] = section
							self.RECORD["GROUP"] = character
							self.RECORD["BOOK_NUMBER"] = book
		return self.RECORD
	def buildTree(self):
		''' POPULATING TREE'''
		print(json.dumps("Populating the tree"))

		Directory = ""
		SectionCode = self.RECORD["SECTION"] + "\\"
		bookNumber = self.RECORD["BOOK_NUMBER"] + " " + "- "

		if self.TAG == "Bundle":
			Directory = "Bundlings\\"
			TypeName = "BUNDLE - "
		if self.TAG == "Chrono":
			Directory = "Chrono\\"
			TypeName = ""
		characterName = self.RECORD["CHAR_NAME"] + ".xlsx"
		characterPath = self.RESIDENT_PATH.replace("undefined", "") + "\\" + Directory + SectionCode + TypeName + bookNumber + characterName
		self.RECORD['PATH'] = Path(characterPath)
		return Path(characterPath)


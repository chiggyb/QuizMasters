from urllib.request import Request, urlopen
from urllib.error import URLError
from itertools import *
import json
import requests

def calcResults(id):
		baseRequest="https://api.mlab.com/api/1/databases/quizmasters1/collections/score?f={\"_id\":0}&p={\"quizid\":"+str(id)+"}"
		apiKey="&apiKey=aMBn_oLsrDEupTvuckLPqxngAhoEW1U1"
		url=baseRequest+apiKey
		#print("https://api.mlab.com/api/1/databases/quizmasters1/collections/score?f={\"_id\":0}&q={\"quizid\":5}&apiKey=aMBn_oLsrDEupTvuckLPqxngAhoEW1U1")
		request = Request(url)
		scoreList=[]
		y=0
		try:
			response = urlopen(request)
			data = response.read()
			encoding = response.info().get_content_charset('utf-8')
			d = json.loads(data.decode(encoding))
			for x in d:
				str1 = str(x).strip('{}')
				l1=str1.split(',')
				name=l1[1].lstrip(' \'userName\': ').rstrip('\'')
				s=l1[2].lstrip(' \'score\': ').rstrip('\'')
				s=s.split('.')
				score=s[0]
				l2=(name,int(score))
				scoreList.insert(y,l2)
				y=y+1
			
			scoreList.sort(key = lambda x: x[1])
			result={'quizid': id, 'winner' :  scoreList[0][0], 'second' :  scoreList[1][0], 'third' : scoreList[2][0], 'fourth' : scoreList[3][0], 'fifth' : scoreList[4][0]}
			return result
			
		except URLError:
			print('No results. Got an error code:')


def postResults(scoreList,id):
		baseRequest="https://api.mlab.com/api/1/databases/quizmasters1/collections/results?&apiKey=aMBn_oLsrDEupTvuckLPqxngAhoEW1U1&q={\"quizid\":" + str(id) +"}"
		headers = {'Content-type': 'application/json;charset=utf-8'}
		try:
			r = requests.put(baseRequest,headers=headers, data=json.dumps(scoreList))
			return r.status_code
		except URLError:
			print('No results. Got an error code:')
        

scoreList = calcResults(1)
#print(scoreList)
status = postResults(scoreList,1)
print(status)



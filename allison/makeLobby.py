from urllib.request import Request, urlopen
from urllib.error import URLError
from itertools import *
import json
import requests
from random import *

def getPlayers():
    baseRequest="https://api.mlab.com/api/1/databases/quizmasters1/collections/users?f={\"_id\":0}&"
    apiKey="apiKey=aMBn_oLsrDEupTvuckLPqxngAhoEW1U1"
    url=baseRequest+apiKey
    request = Request(url)
    players=[]
    y=1
    try:
        response = urlopen(request)
        data = response.read()
        encoding = response.info().get_content_charset('utf-8')
        d = json.loads(data.decode(encoding))
        id_old=0
        quizid=randint(1,1000)
        for x in d:
            str1 = str(x).strip('{}')
            #print(str1)
            l1=str1.split(',')
            name = l1[0].lstrip(' \'userName\': ').rstrip('\'')
            idNum = l1[1].lstrip(' \'id\': ').rstrip('\'')
            pic = l1[2].lstrip(' \'userPic\': ').rstrip('\'')
            if (idNum != id_old):
                players.append((name,pic))
                id_old=idNum
                y=y+1
                if (y>5):
                    break
        #print(players)
        result={'first' :  players[0][0], 'second' :  players[1][0], 'third' : players[2][0], 'fourth' : players[3][0], 'fifth' : players[4][0], 'pic1' :  players[0][1], 'pic2' :  players[1][1], 'pic3' : players[2][1], 'pic4' : players[3][1], 'pic5' : players[4][1]}
        return result
    except URLError:
        print('No results. Got an error code:')  
        
def postPlayers(players):
        baseRequest="https://api.mlab.com/api/1/databases/quizmasters1/collections/lobby?&apiKey=aMBn_oLsrDEupTvuckLPqxngAhoEW1U1"
        headers = {'Content-type': 'application/json;charset=utf-8'}
        try:
            r = requests.put(baseRequest,headers=headers, data=json.dumps(players))
            print(r.status_code)
        except URLError:
            print('No results. Got an error code:')
        
players=getPlayers()
postPlayers(players)

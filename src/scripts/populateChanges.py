# -*- coding: utf-8 -*-

import json, codecs
import requests

with codecs.open('kenpo.json', 'r', 'utf-8') as file:
    changes = json.load(file)
    headers = {'Content-Type': 'application/json'}
    for change in changes:
        endpoint = "http://localhost:9000/change/{0}".format(change['id'] + 1)
        requests.delete(endpoint, headers=headers)

        payload = {'original': change['genkou'], 'revision': change["souan"]}
        print payload
        requests.post(endpoint, data=json.dumps(payload), headers=headers)

from butter_cms import ButterCMS
client = ButterCMS('144b1230658ca32e14f3f1926575bbb61feee861')


print client.posts.all({'page_size': 10, 'page': 1})
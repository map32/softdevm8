def validpass(p):
    u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    l = "abcdefghijklmnopqrstuvwxyz"
    n = "0123456789"
    return len([a for a in p if a in u]) * len([b for b in p if b in l]) * len([c for c in p if c in n]) != 0

def evalpass(p):
    u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    l = "abcdefghijklmnopqrstuvwxyz"
    n = "0123456789"
    a = len([a for a in p if a in u])
    b = len([b for b in p if b in l])
    c = len([c for c in p if c in n])
    d = len(p)-a-b-c
    return int((score(a,len(p))+score(b,len(p))+score(c,len(p))+score(d,len(p)))/(4*score(len(p)/4.,len(p)))*5+0.5)+5

def score(x,n):
    return -x*(x-n/2.)

print evalpass('dfgrre34')
print evalpass('ddf!F43d')

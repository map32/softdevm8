#ducky makes the best happy hardcore

def repeat(s):
    def rnum(n):
        return s*n
    return rnum

def r1(n):
    return repeat('hello')(n)

def r2(n):
    return repeat('goodbye')(n)

print r1(2)

print r2(2)

print repeat('cool')(3)

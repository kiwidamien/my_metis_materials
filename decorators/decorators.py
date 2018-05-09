counter = 0

def fib(n):
    if n < 2:
        return 1
    return fib(n-1) + fib(n-2)

def egg_drop(num_floors, num_eggs):
    pass

def memoize(func):
    memo = {}
    def helper(x):
        if x not in memo:
            memo[x] = func(x)
        return memo[x]
    return helper

class CallCounter:
    __instances = {}

    def __init__(self,f):
        self.function = f
        self.numcalls = 0
        CallCounter.__instances[f] = self

    def __call__(self, *args, **kwords):
        self.numcalls += 1
        return self.function(*args, **kwords)

    def count(self,f):
        return CallCounter.__instances[f]


fib = memoize(fib)
print "\n\n", fib(10)

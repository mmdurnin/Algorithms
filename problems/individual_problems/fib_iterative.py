def fib(num):
    a, b = 0, 1
    for i in xrange(0, num):
        a, b = b, a + b
        print i
    return b
print(fib(5))
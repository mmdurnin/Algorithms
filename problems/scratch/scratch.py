print("hello world")
x = 4
if x == 4:
    print ("hello world")
print("now I'll continue")
myfloat = 7.0
print(myfloat)
myfloat = float(7)
print(myfloat)

mystring = 6.2
if mystring == 6.2:
    print("String: %f" % mystring)

# %d == I'm going to put an integer here
# %s == I'm going to put a string here
# %f == I'm going to put a float here

mylist = []
mylist.append(2)
print(mylist)
print(mylist[0])
print(mylist[-1])

# also concat arrays by "+" and "*"
arr1 = [1, 2, 3, 4, 5]
arr2 = [6, 7, 8, 9, 10]
print(arr1 + arr2)
print(arr1 * 3)

# length = "len"


astring = "Hello world!"
print(astring[3:7])
print(astring[3:7:2]) # prints range 3 - 7, skipping by 2 each time, it would print "l" and " "

# Prints out 0,1,2,3,4 and then it prints "count value reached 5"

count=0
while(count<5):
    print(count)
    count +=1
else:
    print("count value reached %d" %(count))
# prints the end result after condition is no longer met, then ends

# Prints out 1,2,3,4
for i in range(1, 10):
    if(i%5==0):
        break
    print(i)
else:
    print("this is not printed because for loop is terminated because of break but not due to fail in condition")
# there was a break so it wasn't printed. If there weren't a break, it wouldn't print


numbers = [
    951, 402, 984, 651, 360, 69, 408, 319, 601, 485, 980, 507, 725, 547, 544,
    615, 83, 165, 141, 501, 263, 617, 865, 575, 219, 390, 984, 592, 236, 105, 942, 941,
    386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345,
    399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217,
    815, 67, 104, 58, 512, 24, 892, 894, 767, 553, 81, 379, 843, 831, 445, 742, 717,
    958, 609, 842, 451, 688, 753, 854, 685, 93, 857, 440, 380, 126, 721, 328, 753, 470,
    743, 527
]

for number in numbers:
    print(number)
    if number == 402:
        break

strings = ("test1", "test2")
print(strings)


str = "maureen"
reve = str[::-1]
print(reve)
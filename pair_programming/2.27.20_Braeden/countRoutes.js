/* 
Description: A logistics firm is trying to determine how many routes they can serve to use in an advertisement. 
There are a number of cities they can visit, but they only can be visited in order listed, and fuel is limited.
Write a function that receives cities, an array of n integers with the cities positions, and fuel, the amound of fuel available.
It should return the number of different routes available. 
Consider that they can only travel from city i to j if i < j and there is enough fuel left to reach the next city.
The amount of fuel consumed to travel from i tto j is |cities[i] - cities[j]|.
Always start in cities[0], and always travel as long as there is enough fuel to reach another city
Cities may be skipped, but they must be visited in increasing index order.

Parameters:
fuel: an integer representing initial fuel
cities: an array of integers
Return: integer

Ex: 
fuel = 7, cities = [1, 3, 6, 2, 4]
Answer = 6
Explanation: 6 routes available with 7 units of fuel
[0, 1, 2, 4]
[0, 1, 3, 4]
[0, 2, 4]
[0, 3, 4]
[0, 4]
* each number in the possible routes above represents an index # from the cities array

Ex:
fuel = 3, cities = [1, 3, 6, 4]
answer = 2
Explanation: 2 possible trips with 3 units of fuel
[1, 2, 3]
[0, 3]
* each number in the possible routes above represents an index # from the cities array
*/
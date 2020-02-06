def romanToInt(s):
        """
        :type s: str
        :rtype: int
        """
        key = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        result = 0
        reverstr = s[::-1]
        state = "add"
        for i, ch in enumerate(reverstr):
            value = key[ch]
            if state == "add": result += value 
            if state == "subtract": result -= value 
            
            if i < len(s) - 1:
                state = "add"
                compare = s[i + 1]
                if (compare == "V" or compare == "X") and ch == "I": state = "subtract" 
                if (compare == "L" or compare == "C") and ch == "X": state = "subtract" 
                if (compare == "D" or compare == "M") and ch == "C": state = "subtract" 
        return result

# print(romanToInt("III"))

# num = 700
# base = len(`num`) 
# print(`num`[0])
# print(base)
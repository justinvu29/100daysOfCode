from typing import List

class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        left_sum = 0
        right_sum = sum(nums)
        for i in range(len(nums)):
            print(range(len(nums)))
            right_sum -= nums[i]
            if left_sum == right_sum:
                return i 
            left_sum += nums[i]
        else:
            return -1

s = Solution()
result = s.pivotIndex([1, 7, 43, 6, 5, 6])
print(result)

gorilla = "8008"
print(type(int(gorilla)))

numslist = [1,100,42,32,43]
zippity = ["a","b","c","d","e"]
zipped = zip(numslist, zippity)
result = list(zipped)

print(result)
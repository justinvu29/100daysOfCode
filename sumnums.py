from typing import List

# class Solution:
#     def pivotIndex(self, nums: List[int]) -> int:
#         left_sum = 0
#         right_sum = sum(nums)
#         for i in range(len(nums)):
#             print(range(len(nums)))
#             right_sum -= nums[i]
#             if left_sum == right_sum:
#                 return i 
#             left_sum += nums[i]
#         else:
#             return -1

# s = Solution()
# result = s.pivotIndex([1, 7, 43, 6, 5, 6])
# print(result)

# gorilla = "8008"
# print(type(int(gorilla)))

# numslist = [1,100,42,32,43]
# zippity = ["a","b","c","d","e"]
# zipped = zip(numslist, zippity)
# result = list(zipped)

# print(result)


def twoSum(nums, target):
    for i in range(len(nums)):
        print(i in range(len(nums)))
        for j in range(i+1, len(nums)):
        # Check if the current pair of numbers adds up to the target
            if nums[i] + nums[j] == target:
            # If so, return the indices of the pair
                return [i, j]
    
print(twoSum([2,7,11,15], 9))

def reverseString(s: List[str]) -> None:
    """
    Do not return anything, modify s in-place instead.
    """
    left = 0
    right = len(s) - 1
    print(right)
    
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1

s = list("TestingOneToooo")
reverseString(s)
print("".join(s)) 
import random
import string

def generate_coupon(size):
    code = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase + string.digits, k=size))
    return code

print(generate_coupon(size=100)) 
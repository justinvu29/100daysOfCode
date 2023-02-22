import random

def roll_dice(num_dice, num_sides):
    total = 0
    rolls = []
    for i in range(num_dice):
        roll = random.randint(1, num_sides)
        total += roll
        rolls.append(roll)
    return total, rolls

print("Welcome to the Dice Rolling Game!")
num_dice = int(input("Enter the number of dice to roll: "))
num_sides = int(input("Enter the number of sides on each die: "))

while True:
    input("Press enter to roll the dice!")
    total, rolls = roll_dice(num_dice, num_sides)
    print(f"You rolled: {rolls}")
    print(f"Total: {total}")
    play_again = input("Roll again? (y/n) ")
    if play_again.lower() != "y":
        break

print("Thanks for playing!")
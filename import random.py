import random

# Think of a random number between 1 and 100
secret_number = random.randint(1, 100)

# Initialize the number of attempts
attempts = 0

# Main loop
while True:
    # Ask the user for their guess
    user_guess = int(input("Guess the number: "))

    # Check if the user's guess is correct
    if user_guess == secret_number:
        print(" Congratulations! You guessed the number!")
        break

    # Check if the user's guess is higher or lower than the secret number
    elif user_guess > secret_number:
        print("Your guess is too high!")
        attempts += 1
    else:
        print("Your guess is too low!")
        attempts += 1

    # Print the number of attempts
    print(f"Attempts: {attempts}")

# End of program
print("Thank you for playing!")
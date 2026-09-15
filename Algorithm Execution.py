import math

def fibonacci_calls(n):
    # Number of recursive function calls
    if n <= 1:
        return 1
    return fibonacci_calls(n - 1) + fibonacci_calls(n - 2) + 1


def generate_execution_observation_table(sizes):
    print("Algorithm Execution Observation Table")
    
    print("-" * 110)
    print(f"{'Input Size':<12}"
          f"{'Recursive Factorial':<22}"
          f"{'Iterative Factorial':<22}"
          f"{'Recursive Fibonacci':<22}"
          f"{'Iterative Fibonacci':<22}"
          f"{'Linear Search':<18}"
          f"{'Binary Search':<18}")
    print("-" * 110)

    for n in sizes:
        recursive_factorial = n + 1
        iterative_factorial = n

        recursive_fibonacci = fibonacci_calls(n)
        iterative_fibonacci = n

        linear_search = n

        if n > 0:
            binary_search = math.floor(math.log2(n)) + 1
        else:
            binary_search = 0

        print(f"{n:<12}"
              f"{recursive_factorial:<22}"
              f"{iterative_factorial:<22}"
              f"{recursive_fibonacci:<22}"
              f"{iterative_fibonacci:<22}"
              f"{linear_search:<18}"
              f"{binary_search:<18}")

    print("-" * 110)


# Input
k = int(input())
sizes = list(map(int, input().split()))

generate_execution_observation_table(sizes)
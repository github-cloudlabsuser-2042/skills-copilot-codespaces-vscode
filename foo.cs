using System;

class Program
{
    const int MAX_ELEMENTS = 100;

    static int Sum(int[] array, int length)
    {
        int result = 0;
        for (int i = 0; i < length; i++)
        {
            result += array[i];
        }
        return result;
    }

    static void Main()
    {
        int numberOfElements;
        Console.Write("Enter the number of elements (1-100): ");
        if (!int.TryParse(Console.ReadLine(), out numberOfElements) || numberOfElements < 1 || numberOfElements > MAX_ELEMENTS)
        {
            Console.WriteLine("Invalid input. Please provide a digit ranging from 1 to 100.");
            Environment.Exit(1);
        }

        int[] elements = new int[numberOfElements];

        Console.WriteLine("Enter " + numberOfElements + " integers:");
        for (int i = 0; i < numberOfElements; i++)
        {
            while (!int.TryParse(Console.ReadLine(), out elements[i]))
            {
                Console.WriteLine("Invalid input. Please enter an integer.");
            }
        }

        int sum = Sum(elements, numberOfElements);
        Console.WriteLine("The sum of the elements is: " + sum);
    }
}
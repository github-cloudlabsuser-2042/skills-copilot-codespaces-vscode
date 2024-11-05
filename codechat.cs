using System;

class Program{
    static void Main()
    {     
        Console.Write("Enter the number of elements (1-100): ");
        int numberOfElements = int.Parse(Console.ReadLine());
        if (numberOfElements < 1 || numberOfElements > 100)
        {
            Console.WriteLine("Invalid input. Please provide a digit ranging from 1 to 100.");
            Environment.Exit(1);
        }

        int[] elements = new int[numberOfElements];

        Console.WriteLine("Enter " + numberOfElements + " integers:");
        for (int i = 0; i < numberOfElements; i++)
        {
            elements[i] = int.Parse(Console.ReadLine());
        }

        int sum = 0;
        for (int i = 0; i < numberOfElements; i++)
        {
            sum += elements[i];
        }
        Console.WriteLine("The sum of the elements is: " + sum);       
    }
}
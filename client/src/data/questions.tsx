import { CodeBlock, dracula } from "react-code-blocks";
import { IQuestion } from "../models/Question";

export const questions: IQuestion[] = [
  {
    id: 1,
    text: "Which data structure is used for implementing a Last-In-First-Out (LIFO) behavior?",
    answers: [
      {
        id: 1,
        text: "Queue",
      },
      {
        id: 2,
        text: "Stack",
      },
      {
        id: 3,
        text: "Tree",
      },
      {
        id: 4,
        text: "Linked list",
      },
    ],
    answerId: 2,
  },
  {
    id: 2,
    text: "Which data structure is used for storing a collection of elements in a non-linear fashion?",
    answers: [
      {
        id: 1,
        text: "Array",
      },
      {
        id: 2,
        text: "Stack",
      },
      {
        id: 3,
        text: "Queue",
      },
      {
        id: 4,
        text: "Tree",
      },
    ],
    answerId: 4,
  },
  {
    id: 3,
    text: "Which of the following is not a commonly used relational database management system?",
    answers: [
      {
        id: 1,
        text: "MongoDB",
      },
      {
        id: 2,
        text: "Oracle",
      },
      {
        id: 3,
        text: "MySQL",
      },
      {
        id: 4,
        text: "PostgreSQL",
      },
    ],
    answerId: 1,
  },
  {
    id: 4,
    text: "Which of the following is a type of web server?",
    answers: [
      {
        id: 1,
        text: "Apache HTTP Server",
      },
      {
        id: 2,
        text: "Nginx",
      },
      {
        id: 3,
        text: "Microsoft IIS",
      },
      {
        id: 4,
        text: "All of the options",
      },
    ],
    answerId: 4,
  },
  {
    id: 5,
    text: "Let x be an integer which can take a value of 0 or 1. The statement if(x == 0) x = 1; else x = 0; is equivalent to which one of the following?",
    answers: [
      {
        id: 1,
        text: "x = 1 + x;",
      },
      {
        id: 2,
        text: "x = 1 - x;",
      },
      {
        id: 3,
        text: "x = x - 1;",
      },
      {
        id: 4,
        text: "x = 1 % x;",
      },
    ],
    answerId: 2,
  },
  {
    id: 6,
    text: (
      <>
        <p>
          Choose the best statement with respect to following three program
          snippets.
        </p>
        <CodeBlock
          text={`/*Program Snippet 1 with for loop*/
for (i = 0; i < 10; i++)
{
  /*statement1*/
  continue;
  /*statement2*/
}

/*Program Snippet 2 with while loop*/
i = 0;
while (i < 10)
{
  /*statement1*/
  continue;
  /*statement2*/
  i++;
}

/*Program Snippet 3 with do-while loop*/
i = 0;
do
{
  /*statement1*/
  continue;
  /*statement2*/
  i++;
} while (i < 10);`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "All the loops are equivalent i.e. any of the three can be chosen and thay all will perform exactly the same.",
      },
      {
        id: 2,
        text: "Continue can't be used with all three loops in C.",
      },
      {
        id: 3,
        text: "After hitting the continue; statement in all the loops, the next expression to be executed would be the controlling expression (i.e. i < 10) in all the 3 loops.",
      },
      {
        id: 4,
        text: "None of the options is correct.",
      },
    ],
    answerId: 4,
  },
  {
    id: 7,
    text: (
      <>
        <p>Consider the following logical inferences.</p>
        <p>I1: If it rains then the cricket match will not be played.</p>
        <p>The cricket match was played.</p>
        <p>
          <b>Inference:</b> There was no rain.
        </p>
        <p>I2: If it rains then the cricket match will not be played.</p>
        <p>It did not rain.</p>
        <p>
          <b>Inference:</b> The cricket match was played.
        </p>
        <p>
          Which of the following is <b>TRUE</b>?
        </p>
      </>
    ),
    answers: [
      {
        id: 1,
        text: "Both I1 and I2 are correct inferences.",
      },
      {
        id: 2,
        text: "I1 is correct but I2 is not a correct inference.",
      },
      {
        id: 3,
        text: "I1 is not correct but I2 is a correct inference.",
      },
      {
        id: 4,
        text: "Both I1 and I2 are not correct inferences.",
      },
    ],
    answerId: 1,
  },
  {
    id: 8,
    text: (
      <>
        <p>Predict the output of the following program:</p>
        <CodeBlock
          text={`char inchar = 'A';
switch (inchar)
{
case 'A' :
    printf ("Choice A \\n") ;
case 'B' :
    printf ("Choice B ") ;
case 'C' :
case 'D' :
case 'E' :
default:
    printf ("No Choice") ;
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "No choice",
      },
      {
        id: 2,
        text: "Choice A",
      },
      {
        id: 3,
        text: (
          <>
            <p>Choice A</p>
            <p>Choice B No choice</p>
          </>
        ),
      },
      {
        id: 4,
        text: "Program gives no output as it is erroneous.",
      },
    ],
    answerId: 3,
  },
  {
    id: 9,
    text: (
      <>
        <p>Predict the output of the following program:</p>
        <CodeBlock
          text={`#include <stdio.h>

int fun(int n)
{
    if (n == 4)
      return n;
    else return 2*fun(n+1);
}

int main()
{
  printf("%d", fun(2));
  return 0;
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "4",
      },
      {
        id: 2,
        text: "8",
      },
      {
        id: 3,
        text: "16",
      },
      {
        id: 4,
        text: "Runtime error",
      },
    ],
    answerId: 3,
  },
  {
    id: 10,
    text: (
      <>
        <p>
          Consider the following recursive function fun(x, y). What is the value
          of fun(4, 3):
        </p>
        <CodeBlock
          text={`int fun(int x, int y) 
{
  if (x == 0)
    return y;
  return fun(x - 1,  x + y);
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "13",
      },
      {
        id: 2,
        text: "12",
      },
      {
        id: 3,
        text: "9",
      },
      {
        id: 4,
        text: "10",
      },
    ],
    answerId: 1,
  },
  {
    id: 11,
    text: (
      <>
        <p>What is the output of the following program?</p>
        <CodeBlock
          text={`#include<stdio.h>
void print(int n)
{
    if (n > 4000)
        return;
    printf("%d ", n);
    print(2*n);
    printf("%d ", n);
}
  
int main()
{
    print(1000);
    getchar();
    return 0;
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "1000 2000 4000",
      },
      {
        id: 2,
        text: "1000 2000 4000 4000 2000 1000",
      },
      {
        id: 3,
        text: "1000 2000 4000 2000 1000",
      },
      {
        id: 4,
        text: "1000 2000 2000 1000",
      },
    ],
    answerId: 2,
  },
  {
    id: 12,
    text: (
      <>
        <p>What is the output of the following Java program?</p>
        <CodeBlock
          text={`class Base {
  public void Print() {
      System.out.println("Base");
  }         
}

class Derived extends Base {    
    public void Print() {
        System.out.println("Derived");
    }
}
  
class Main{
    public static void DoPrint( Base o ) {
        o.Print();   
    }
    public static void main(String[] args) {
        Base x = new Base();
        Base y = new Derived();
        Derived z = new Derived();
        DoPrint(x);
        DoPrint(y);
        DoPrint(z);
    }
}`}
          language="java"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: (
          <>
            <p>Base</p>
            <p>Derived</p>
            <p>Derived</p>
          </>
        ),
      },
      {
        id: 2,
        text: (
          <>
            <p>Base</p>
            <p>Base</p>
            <p>Derived</p>
          </>
        ),
      },
      {
        id: 3,
        text: (
          <>
            <p>Base</p>
            <p>Derived</p>
            <p>Base</p>
          </>
        ),
      },
      {
        id: 4,
        text: "Compiler Error",
      },
    ],
    answerId: 1,
  },
  {
    id: 13,
    text: (
      <>
        <p>IF</p>
        <p>4 + 4 = 6</p>
        <p>25 + 25 = 45</p>
        <p>16 + 16 = 28</p>
        <p>9 + 9 = 15</p>
        <p>THEN</p>
        <p>1 + 1 = ?</p>
      </>
    ),
    answers: [
      {
        id: 1,
        text: "0",
      },
      {
        id: 2,
        text: "1",
      },
      {
        id: 3,
        text: "2",
      },
      {
        id: 4,
        text: "3",
      },
    ],
    answerId: 2,
  },
  {
    id: 14,
    text: (
      <>
        <p>Which two days are missing?</p>
        <p>SUNDAY</p>
        <p>TUESDAY</p>
        <p>FRIDAY</p>
        <p>?</p>
        <p>WEDNESDAY</p>
        <p>FRIDAY</p>
        <p>?</p>
        <p>WEDNESDAY</p>
        <p>SATURDAY</p>
        <p>MONDAY</p>
      </>
    ),
    answers: [
      {
        id: 1,
        text: "MONDAY, SUNDAY",
      },
      {
        id: 2,
        text: "SATURDAY, MONDAY",
      },
      {
        id: 3,
        text: "SUNDAY, MONDAY",
      },
      {
        id: 4,
        text: "TUESDAY, SATURDAY",
      },
    ],
    answerId: 3,
  },
  {
    id: 15,
    text: "There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?",
    answers: [
      {
        id: 1,
        text: "5",
      },
      {
        id: 2,
        text: "8",
      },
      {
        id: 3,
        text: "12",
      },
      {
        id: 4,
        text: "3",
      },
    ],
    answerId: 4,
  },
  {
    id: 16,
    text: "What does VOIS stand for?",
    answers: [
      {
        id: 1,
        text: "Vodafone Innovative Solutions",
      },
      {
        id: 2,
        text: "Vodafone Intelligent Solutions",
      },
      {
        id: 3,
        text: "Vodafone Intelligent Services",
      },
      {
        id: 4,
        text: "Vodafone IT Services",
      },
    ],
    answerId: 2,
  },
  {
    id: 17,
    text: (
      <p>
        Which country does <b>not</b> have a VOIS center?
      </p>
    ),
    answers: [
      {
        id: 1,
        text: "India",
      },
      {
        id: 2,
        text: "Egypt",
      },
      {
        id: 3,
        text: "Romania",
      },
      {
        id: 4,
        text: "Germany",
      },
    ],
    answerId: 4,
  },
  {
    id: 18,
    text: "How many VOIS employees are there worldwide?",
    answers: [
      {
        id: 1,
        text: "29000",
      },
      {
        id: 2,
        text: "15000",
      },
      {
        id: 3,
        text: "5000",
      },
      {
        id: 4,
        text: "21000",
      },
    ],
    answerId: 1,
  },
  {
    id: 19,
    text: "At VOIS, we are working with Cloud services from:",
    answers: [
      {
        id: 1,
        text: "Google Cloud",
      },
      {
        id: 2,
        text: "AWS",
      },
      {
        id: 3,
        text: "Azure",
      },
      {
        id: 4,
        text: "All",
      },
    ],
    answerId: 4,
  },
  {
    id: 20,
    text: (
      <>
        <p>What does the following piece of code do?</p>
        <CodeBlock
          text={`for (int i = 0; i < arr.length-1; i++)
{
    for (int j = i+1; j < arr.length; j++)
    {
        if( (arr[i].equals(arr[j])) && (i != j) )
        {
            System.out.println(arr[i]);
        }
    }
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "Print the duplicate elements in the array",
      },
      {
        id: 2,
        text: "Print the element with maximum frequency",
      },
      {
        id: 3,
        text: "Print the unique elements in the array",
      },
      {
        id: 4,
        text: "Prints the element with minimum frequnecy",
      },
    ],
    answerId: 1,
  },
  {
    id: 21,
    text: "Choose the recursive formula for the Fibonacci series.(n>=1)",
    answers: [
      {
        id: 1,
        text: "F(n) = F(n+1) + F(n+2)",
      },
      {
        id: 2,
        text: "F(n) = F(n) + F(n+1)",
      },
      {
        id: 3,
        text: "F(n) = F(n-1) + F(n-2)",
      },
      {
        id: 4,
        text: "F(n) = F(n-1) – F(n-2)",
      },
    ],
    answerId: 3,
  },
  {
    id: 22,
    text: "Recursion is a method in which the solution of a problem depends on ____________",
    answers: [
      {
        id: 1,
        text: "Larger instances of different problems",
      },
      {
        id: 2,
        text: "Larger instances of the same problem",
      },
      {
        id: 3,
        text: "Smaller instances of the same problem",
      },
      {
        id: 4,
        text: "Smaller instances of different problems",
      },
    ],
    answerId: 3,
  },
  {
    id: 23,
    text: (
      <>
        <p>What will be the output of the following Java code?</p>
        <CodeBlock
          text={`class increment {
  public static void main(String args[]) 
  {        
        int g = 3;
        System.out.print(++g * 8);
  } 
}`}
          language="java"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "32",
      },
      {
        id: 2,
        text: "33",
      },
      {
        id: 3,
        text: "24",
      },
      {
        id: 4,
        text: "25",
      },
    ],
    answerId: 1,
  },
  {
    id: 24,
    text: (
      <>
        <p>What will be the output of the following JavaScript code snippet?</p>
        <CodeBlock
          text={`function equalto()
{
    const num=10;
    if(num==="10")
        return true;
    else
        return false;
}`}
          language="javascript"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: "false",
      },
      {
        id: 2,
        text: "true",
      },
      {
        id: 3,
        text: "compilation error",
      },
      {
        id: 4,
        text: "runtime error",
      },
    ],
    answerId: 1,
  },
  {
    id: 25,
    text: "NoSQL databases is used mainly for handling large volumes of ______________ data.",
    answers: [
      {
        id: 1,
        text: "unstructured",
      },
      {
        id: 2,
        text: "structured",
      },
      {
        id: 3,
        text: "semi-structured",
      },
      {
        id: 4,
        text: "all of the mentioned",
      },
    ],
    answerId: 1,
  },
  {
    id: 26,
    text: " ____________ data model with embedded data combines all related data for a represented entity in a single document.",
    answers: [
      {
        id: 1,
        text: "normalized",
      },
      {
        id: 2,
        text: "denormalized",
      },
      {
        id: 3,
        text: "non relational",
      },
      {
        id: 4,
        text: "relational",
      },
    ],
    answerId: 2,
  },
  {
    id: 27,
    text: "Which of the following testing is also known as white-box testing?",
    answers: [
      {
        id: 1,
        text: "Structural testing",
      },
      {
        id: 2,
        text: "Error guessing technique",
      },
      {
        id: 3,
        text: "Design based testing",
      },
      {
        id: 4,
        text: "None of these options",
      },
    ],
    answerId: 1,
  },
  {
    id: 28,
    text: "Which of the following testing methodologies is related to the boundary value analysis?",
    answers: [
      {
        id: 1,
        text: "White box and black box testing",
      },
      {
        id: 2,
        text: "White-box testing",
      },
      {
        id: 3,
        text: "Black box testing",
      },
      {
        id: 4,
        text: "None of these options",
      },
    ],
    answerId: 3,
  },
  {
    id: 29,
    text: "What are the different levels of Testing?",
    answers: [
      {
        id: 1,
        text: "Integration testing",
      },
      {
        id: 2,
        text: "Unit testing",
      },
      {
        id: 3,
        text: "System testing",
      },
      {
        id: 4,
        text: "All of the options",
      },
    ],
    answerId: 4,
  },
  {
    id: 30,
    text: "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
    answers: [
      {
        id: 1,
        text: "tag",
      },
      {
        id: 2,
        text: "id",
      },
      {
        id: 3,
        text: "class",
      },
      {
        id: 4,
        text: "both class and tag",
      },
    ],
    answerId: 2,
  },
  {
    id: 31,
    text: "Which of the following CSS property is used to make the text bold?",
    answers: [
      {
        id: 1,
        text: "text-decoration: bold",
      },
      {
        id: 2,
        text: "font-weight: bold",
      },
      {
        id: 3,
        text: "font-style: bold",
      },
      {
        id: 4,
        text: "text-align: bold",
      },
    ],
    answerId: 2,
  },
  {
    id: 32,
    text: "What is Infrastructure as a Service (IaaS)?",
    answers: [
      {
        id: 1,
        text: "A cloud computing service that provides virtualized computing resources, such as servers and storage",
      },
      {
        id: 2,
        text: "A cloud computing service that provides access to a software application over the internet",
      },
      {
        id: 3,
        text: "A cloud computing service that provides a development platform for building software applications",
      },
      {
        id: 4,
        text: "A cloud computing service that provides data analysis and visualization tools",
      },
    ],
    answerId: 1,
  },
  {
    id: 33,
    text: "What is the benefit of using cloud computing?",
    answers: [
      {
        id: 1,
        text: "Cost savings and scalability",
      },
      {
        id: 2,
        text: "Increased security and data privacy",
      },
      {
        id: 3,
        text: "Better performance and faster processing",
      },
      {
        id: 4,
        text: "More control over hardware and software resources",
      },
    ],
    answerId: 1,
  },
  {
    id: 34,
    text: (
      <>
        <p>Which of the C# code should be added to get the following output?</p>
        <CodeBlock
          text={`* * * * *
* * * *
* * *
* *
*
static void Main(string[] args)
{
  int i,j;
  /* Add code here */
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: (
          <CodeBlock
            text={`for (i = 0;i <= 4; i++)
{
  for(j = 0;j <= 4; j++)
  Console.Write("*");
  Console.Write("\\n");
}`}
            language="c"
            showLineNumbers={true}
            startingLineNumber={1}
            theme={dracula}
          />
        ),
      },
      {
        id: 2,
        text: (
          <>
            <CodeBlock
              text={`for (i = 0;i <= 4; i++)
{
  for(j = 4;j <= i; j--)
  Console.Write("*");
  Console.Write("\\n");
}`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 3,
        text: (
          <>
            <CodeBlock
              text={`for (i = 0;i <= 4; i++)
{
  for (j = i;j <= 4; j++)
  Console.Write("*");
  Console.Write("\\n");
}`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 4,
        text: (
          <>
            <CodeBlock
              text={`for ( i = 0;i <= 4; i++)
{
  for (j = 0;j <= i; j++)
  Console.Write("*");
  Console.Write("\\n");
}`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
    ],
    answerId: 3,
  },
  {
    id: 35,
    text: (
      <>
        <p>
          For the incomplete C# program below, which of the code fragments will
          <b>not</b> result in an infinite loop?
        </p>
        <CodeBlock
          text={`static void Main(string[] args)
{
  int i = 1234 ,j = 0;
  /*ADD CODE HERE */
  Console.WriteLine(j);
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: (
          <>
            <CodeBlock
              text={`do
{
  j = j + (i % 10);
}while ((i = i / 10)!= 0);`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 2,
        text: (
          <>
            <CodeBlock
              text={`do
{
  j = j + (i % 10);
}while ((i / 10)!= 0);`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 3,
        text: (
          <>
            <CodeBlock
              text={`do
{
  j = j + (i % 10);
}while ((i % 10)!= 0);`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 4,
        text: (
          <CodeBlock
            text={`do
{
  j = j + (i % 10);
}while ((i/10 == 0)!= 0);`}
            language="c"
            showLineNumbers={true}
            startingLineNumber={1}
            theme={dracula}
          />
        ),
      },
    ],
    answerId: 1,
  },
  {
    id: 36,
    text: (
      <>
        <p>
          Which of the following pieces of code corrects the following program,
          resulting in printing the minus sign 20 times?
        </p>
        <CodeBlock
          text={`#include <stdio.h>
int main(){
  int i;
  int n = 20;
  for( i = 0; i < n; i-- )
      printf("-");
  return 0;
}`}
          language="c"
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
        />
      </>
    ),
    answers: [
      {
        id: 1,
        text: (
          <>
            <CodeBlock
              text={`for( i = 0; -i < n; i-- )
printf("-");`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 2,
        text: (
          <>
            <CodeBlock
              text={`for( i = 0; i + n; i-- )
printf("-");`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 3,
        text: (
          <>
            <CodeBlock
              text={`for( i = 0; i < n; n-- )
printf("-");`}
              language="c"
              showLineNumbers={true}
              startingLineNumber={1}
              theme={dracula}
            />
            <br />
          </>
        ),
      },
      {
        id: 4,
        text: "All of them",
      },
    ],
    answerId: 4,
  },
  {
    id: 37,
    text: "What are the key components of DevOps?",
    answers: [
      {
        id: 1,
        text: "Cost savings and scalability",
      },
      {
        id: 2,
        text: "Continuous Integration",
      },
      {
        id: 3,
        text: "Continuous Delivery & Monitoring",
      },
      {
        id: 4,
        text: "All of the options",
      },
    ],
    answerId: 4,
  },
  {
    id: 38,
    text: "What is the use of Git?",
    answers: [
      {
        id: 1,
        text: "Containerization tool",
      },
      {
        id: 2,
        text: "Continuous Integration tool",
      },
      {
        id: 3,
        text: "Version Control System tool",
      },
      {
        id: 4,
        text: "Continuous Monitoring tool",
      },
    ],
    answerId: 3,
  },
];

window.ITEM_BANK = {
  "meta": {
    "description": "ACT-style Algebra & Functions items, generated from templates and verified with sympy.",
    "seconds_per_item": 66.7,
    "form_items": 20,
    "form_minutes": 22,
    "answer_choices": 4,
    "seed": 6460,
    "skills": {
      "S1": "Linear equations, inequalities, and systems",
      "S2": "Quadratic and exponential expressions and equations",
      "S3": "Function concepts and notation",
      "S4": "Function families and transformations"
    }
  },
  "forms": {
    "A": [
      {
        "id": "A-S2-1",
        "skill": "S2",
        "template": "Q1",
        "difficulty": 1,
        "stem": "For $x \\ne 0$, which expression is equivalent to $\\dfrac{x^{7} \\cdot x^{6}}{x^{9}}$?",
        "choices": [
          {
            "text": "x^{51}",
            "correct": false,
            "misconception": "multiplied-then-divided-exponents",
            "label": "A"
          },
          {
            "text": "x^{22}",
            "correct": false,
            "misconception": "added-exponent-when-dividing",
            "label": "B"
          },
          {
            "text": "x^{4}",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "x^{33}",
            "correct": false,
            "misconception": "multiplied-exponents-when-multiplying",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "What happens to exponents when you multiply powers with the same base? When you divide?",
          "Multiplying the same base adds exponents; dividing subtracts them.",
          "The numerator is $x^{13}$."
        ],
        "solution": [
          "$x^{7}x^{6} = x^{13}$",
          "$x^{13}/x^{9} = x^{4}$"
        ],
        "position": 1
      },
      {
        "id": "A-S1-1",
        "skill": "S1",
        "template": "L1",
        "difficulty": 1,
        "stem": "If $3x - 2 = 25$, what is the value of $x$?",
        "choices": [
          {
            "text": "\\frac{31}{3}",
            "correct": false,
            "misconception": "inverse-operations-wrong-order",
            "label": "A"
          },
          {
            "text": "\\frac{23}{3}",
            "correct": false,
            "misconception": "sign-error-moving-term",
            "label": "B"
          },
          {
            "text": "24",
            "correct": false,
            "misconception": "subtracted-coefficient-instead-of-dividing",
            "label": "C"
          },
          {
            "text": "9",
            "correct": true,
            "misconception": null,
            "label": "D"
          }
        ],
        "answer": "D",
        "hints": [
          "What operation is being done to $x$ first, and what is done last?",
          "Undo operations in reverse order: deal with the constant term before the coefficient.",
          "Start by subtracting $-2$ from both sides: $3x = 27$."
        ],
        "solution": [
          "$3x = 25 - (-2) = 27$",
          "$x = 27 / 3 = 9$"
        ],
        "position": 2
      },
      {
        "id": "A-S3-1",
        "skill": "S3",
        "template": "F1",
        "difficulty": 1,
        "stem": "If $f(x) = x^{2} + 6 x + 3$, what is $f(-4)$?",
        "choices": [
          {
            "text": "-8",
            "correct": false,
            "misconception": "dropped-constant-term",
            "label": "A"
          },
          {
            "text": "-37",
            "correct": false,
            "misconception": "negative-squared-sign-error",
            "label": "B"
          },
          {
            "text": "43",
            "correct": false,
            "misconception": "sign-error-linear-term",
            "label": "C"
          },
          {
            "text": "-5",
            "correct": true,
            "misconception": null,
            "label": "D"
          }
        ],
        "answer": "D",
        "hints": [
          "What does $f(-4)$ mean you should do with the number in parentheses?",
          "Replace every $x$ with the input, using parentheses around negative numbers.",
          "$(-4)^2 = 16$, so the first term is $1\\cdot16$."
        ],
        "solution": [
          "$f(-4) = 1(-4)^2 + 6(-4) + 3$",
          "$= -5$"
        ],
        "position": 3
      },
      {
        "id": "A-S4-1",
        "skill": "S4",
        "template": "T1",
        "difficulty": 1,
        "stem": "The graph of $y = x^2$ is shifted 4 units right and 5 units down. Which equation describes the new graph?",
        "choices": [
          {
            "text": "y = (x + 4)^2 + 5",
            "correct": false,
            "misconception": "both-shift-directions-reversed",
            "label": "A"
          },
          {
            "text": "y = (x - 4)^2 + 5",
            "correct": false,
            "misconception": "vertical-shift-direction-reversed",
            "label": "B"
          },
          {
            "text": "y = (x - 4)^2 - 5",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "y = (x + 4)^2 - 5",
            "correct": false,
            "misconception": "horizontal-shift-direction-reversed",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "Where does the vertex of $y = x^2$ move to after the shifts?",
          "In $y = (x - h)^2 + k$, the vertex is at $(h, k)$. Shifting right makes $h$ positive.",
          "The new vertex is at $(4, -5)$."
        ],
        "solution": [
          "Vertex moves to $(4, -5)$",
          "$y = (x - 4)^2 - 5$"
        ],
        "position": 4
      },
      {
        "id": "A-S3-3",
        "skill": "S3",
        "template": "F3",
        "difficulty": 2,
        "stem": "What is the domain of $f(x) = \\sqrt{3 x - 15}$?",
        "choices": [
          {
            "text": "\\text{all real numbers}",
            "correct": false,
            "misconception": "ignored-square-root-restriction",
            "label": "A"
          },
          {
            "text": "x > 5",
            "correct": false,
            "misconception": "excluded-zero-under-radical",
            "label": "B"
          },
          {
            "text": "x \\ge 5",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "x \\ge -5",
            "correct": false,
            "misconception": "sign-error-solving-for-x",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "What kinds of numbers can you take the square root of and get a real result?",
          "Set the expression under the radical greater than or equal to zero and solve.",
          "Solve $3 x - 15 \\ge 0$."
        ],
        "solution": [
          "$3 x - 15 \\ge 0$",
          "$x \\ge 5$"
        ],
        "position": 5
      },
      {
        "id": "A-S2-3",
        "skill": "S2",
        "template": "Q3",
        "difficulty": 2,
        "stem": "Which of the following is equivalent to $(2 x - 6)^2$?",
        "choices": [
          {
            "text": "4 x^{2} + 36",
            "correct": false,
            "misconception": "squared-each-term-separately",
            "label": "A"
          },
          {
            "text": "4 x^{2} - 12 x + 36",
            "correct": false,
            "misconception": "missing-factor-2-in-middle-term",
            "label": "B"
          },
          {
            "text": "4 x^{2} - 24 x + 36",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "2 x^{2} - 24 x + 36",
            "correct": false,
            "misconception": "coefficient-not-squared",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "Write the square as a product of two identical binomials.",
          "Use FOIL or the pattern $(a+b)^2 = a^2 + 2ab + b^2$.",
          "The middle term is $2 \\cdot (2 x) \\cdot (-6)$."
        ],
        "solution": [
          "$(2 x - 6)^2 = (2 x)^2 + 2(2 x)(-6) + (-6)^2$",
          "$= 4 x^{2} - 24 x + 36$"
        ],
        "position": 6
      },
      {
        "id": "A-S4-3",
        "skill": "S4",
        "template": "T3",
        "difficulty": 2,
        "stem": "A line passes through the points $(-2, 0)$ and $(-1, 3)$. What is its $y$-intercept?",
        "choices": [
          {
            "text": "3",
            "correct": false,
            "misconception": "reported-slope",
            "label": "A"
          },
          {
            "text": "6",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "-6",
            "correct": false,
            "misconception": "sign-error-solving-for-b",
            "label": "C"
          },
          {
            "text": "\\frac{2}{3}",
            "correct": false,
            "misconception": "used-reciprocal-slope",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "What two pieces of information define a line in slope-intercept form?",
          "Find the slope with rise over run, then substitute one point into $y = mx + b$.",
          "The slope is $\\dfrac{3 - (0)}{-1 - (-2)} = 3$."
        ],
        "solution": [
          "$m = 3$",
          "$0 = 3(-2) + b \\Rightarrow b = 6$"
        ],
        "position": 7
      },
      {
        "id": "A-S4-2",
        "skill": "S4",
        "template": "T2",
        "difficulty": 2,
        "stem": "What are the coordinates of the vertex of the graph of $y = \\frac{1}{2}(x + 4)^2 - 3$?",
        "choices": [
          {
            "text": "(-3, -4)",
            "correct": false,
            "misconception": "swapped-coordinates",
            "label": "A"
          },
          {
            "text": "(4, -3)",
            "correct": false,
            "misconception": "sign-of-h-in-vertex-form",
            "label": "B"
          },
          {
            "text": "(-4, 3)",
            "correct": false,
            "misconception": "sign-of-k-in-vertex-form",
            "label": "C"
          },
          {
            "text": "(-4, -3)",
            "correct": true,
            "misconception": null,
            "label": "D"
          }
        ],
        "answer": "D",
        "hints": [
          "What value of $x$ makes the squared part equal to zero?",
          "In $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Watch the sign inside the parentheses.",
          "The squared part is zero when $x = -4$."
        ],
        "solution": [
          "$x = -4$ makes $(x + 4)^2 = 0$",
          "Then $y = -3$, so the vertex is $(-4, -3)$"
        ],
        "position": 8
      },
      {
        "id": "A-S2-2",
        "skill": "S2",
        "template": "Q2",
        "difficulty": 2,
        "stem": "What is the solution set of $x^{2} + 3 x - 4 = 0$?",
        "choices": [
          {
            "text": "\\{-4, 1\\}",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "\\{-4, -1\\}",
            "correct": false,
            "misconception": "sign-error-one-root",
            "label": "B"
          },
          {
            "text": "\\{1, 4\\}",
            "correct": false,
            "misconception": "sign-error-one-root",
            "label": "C"
          },
          {
            "text": "\\{-1, 4\\}",
            "correct": false,
            "misconception": "used-factor-constants-as-roots",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "Can the left side be written as a product of two binomials?",
          "Look for two numbers that multiply to $-4$ and add to $3$.",
          "The factors are $(x - 1)(x + 4)$. What makes each factor zero?"
        ],
        "solution": [
          "$x^{2} + 3 x - 4 = (x - 1)(x + 4)$",
          "Each factor is zero when $x = 1$ or $x = -4$"
        ],
        "position": 9
      },
      {
        "id": "A-S3-2",
        "skill": "S3",
        "template": "F2",
        "difficulty": 2,
        "stem": "If $f(x) = 2 x$ and $g(x) = x^{2} + 6$, what is $f(g(4))$?",
        "choices": [
          {
            "text": "70",
            "correct": false,
            "misconception": "composed-in-wrong-order",
            "label": "A"
          },
          {
            "text": "44",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "176",
            "correct": false,
            "misconception": "multiplied-instead-of-composed",
            "label": "C"
          },
          {
            "text": "30",
            "correct": false,
            "misconception": "added-instead-of-composed",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "Which function do you evaluate first in $f(g(x))$?",
          "Work from the inside out: find $g$ of the number, then use that output as the input to $f$.",
          "$g(4) = 22$. Now find $f(22)$."
        ],
        "solution": [
          "$g(4) = 22$",
          "$f(22) = 44$"
        ],
        "position": 10
      },
      {
        "id": "A-S1-3",
        "skill": "S1",
        "template": "L3",
        "difficulty": 2,
        "stem": "In the system below, what is the value of $x$?\n$5 x + y = 16$\n$x + y = 4$",
        "choices": [
          {
            "text": "-3",
            "correct": false,
            "misconception": "sign-error-elimination",
            "label": "A"
          },
          {
            "text": "1",
            "correct": false,
            "misconception": "reported-other-variable",
            "label": "B"
          },
          {
            "text": "4",
            "correct": false,
            "misconception": "reported-sum-of-variables",
            "label": "C"
          },
          {
            "text": "3",
            "correct": true,
            "misconception": null,
            "label": "D"
          }
        ],
        "answer": "D",
        "hints": [
          "Can you make one variable disappear by combining the two equations?",
          "Multiply one or both equations so the $y$ coefficients are opposites, then add.",
          "Multiply the first equation by $1$ and the second by $-1$, then add to eliminate $y$."
        ],
        "solution": [
          "Eliminating $y$: $4x = 12$",
          "$x = 3$ (and $y = 1$)"
        ],
        "position": 11
      },
      {
        "id": "A-S1-2",
        "skill": "S1",
        "template": "L2",
        "difficulty": 2,
        "stem": "What value of $x$ satisfies $2(x - 4) = x - 14$?",
        "choices": [
          {
            "text": "-10",
            "correct": false,
            "misconception": "distribution-to-first-term-only",
            "label": "A"
          },
          {
            "text": "-22",
            "correct": false,
            "misconception": "sign-error-distributing-negative",
            "label": "B"
          },
          {
            "text": "-6",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "-2",
            "correct": false,
            "misconception": "sign-error-collecting-like-terms",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "What must happen to the parentheses before you can collect the $x$ terms?",
          "Distribute the outside factor to every term inside, then get all $x$ terms on one side.",
          "Distributing gives $2x - 8 = x - 14$."
        ],
        "solution": [
          "$2x - 8 = x - 14$",
          "$1x = -6$",
          "$x = -6$"
        ],
        "position": 12
      },
      {
        "id": "A-S4-5",
        "skill": "S4",
        "template": "T6",
        "difficulty": 3,
        "stem": "At how many points do the graphs of $y = x^{2} + 6$ and $y = 3 x + 5$ intersect?",
        "choices": [
          {
            "text": "1",
            "correct": false,
            "misconception": "assumed-tangent",
            "label": "A"
          },
          {
            "text": "\\text{Infinitely many}",
            "correct": false,
            "misconception": "confused-intersection-with-identical-graphs",
            "label": "B"
          },
          {
            "text": "2",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "0",
            "correct": false,
            "misconception": "sign-error-discriminant",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "What equation do you get by setting the two $y$-expressions equal?",
          "The number of real solutions of the resulting quadratic equals the number of intersection points. Use the discriminant.",
          "Setting them equal gives $x^{2} - 3 x + 1 = 0$."
        ],
        "solution": [
          "$x^{2} - 3 x + 1 = 0$, discriminant $= 9 - 4(1) = 5$",
          "Discriminant > 0, so 2 point(s)"
        ],
        "position": 13
      },
      {
        "id": "A-S3-4",
        "skill": "S3",
        "template": "F5",
        "difficulty": 3,
        "stem": "If $f(x) = 3 - 2 x$, what is $f^{-1}(-1)$?",
        "choices": [
          {
            "text": "5",
            "correct": false,
            "misconception": "evaluated-f-not-inverse",
            "label": "A"
          },
          {
            "text": "2",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "-1",
            "correct": false,
            "misconception": "sign-error-undoing-addition",
            "label": "C"
          },
          {
            "text": "- \\frac{5}{2}",
            "correct": false,
            "misconception": "undid-in-wrong-order",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "$f^{-1}(-1)$ asks: what input to $f$ gives an output of $-1$?",
          "Set $f(x) = -1$ and solve for $x$.",
          "Solve $3 - 2 x = -1$."
        ],
        "solution": [
          "$3 - 2 x = -1$",
          "$-2x = -4$, so $x = 2$"
        ],
        "position": 14
      },
      {
        "id": "A-S2-5",
        "skill": "S2",
        "template": "Q6",
        "difficulty": 3,
        "stem": "For what value of $c$ does $x^2 + 12x + c = 0$ have exactly one real solution?",
        "choices": [
          {
            "text": "36",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "6",
            "correct": false,
            "misconception": "halved-b-but-did-not-square",
            "label": "B"
          },
          {
            "text": "72",
            "correct": false,
            "misconception": "discriminant-factor-error",
            "label": "C"
          },
          {
            "text": "144",
            "correct": false,
            "misconception": "forgot-4ac-factor",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "How many real solutions does a quadratic have when its discriminant is zero?",
          "Set $b^2 - 4ac = 0$ and solve for $c$.",
          "Here $a = 1$ and $b = 12$, so $144 - 4c = 0$."
        ],
        "solution": [
          "$b^2 - 4ac = 144 - 4c = 0$",
          "$c = 36$"
        ],
        "position": 15
      },
      {
        "id": "A-S1-5",
        "skill": "S1",
        "template": "L6",
        "difficulty": 3,
        "stem": "For what value of $k$ does the system below have no solution?\n$6 x + y = 8$\n$kx + 4y = 6$",
        "choices": [
          {
            "text": "4",
            "correct": false,
            "misconception": "matched-y-coefficient-not-ratio",
            "label": "A"
          },
          {
            "text": "\\frac{3}{2}",
            "correct": false,
            "misconception": "divided-instead-of-scaled",
            "label": "B"
          },
          {
            "text": "6",
            "correct": false,
            "misconception": "equal-coefficients-not-proportional",
            "label": "C"
          },
          {
            "text": "24",
            "correct": true,
            "misconception": null,
            "label": "D"
          }
        ],
        "answer": "D",
        "hints": [
          "What do the graphs of two equations look like when the system has no solution?",
          "Parallel lines have the same slope but different intercepts, so the coefficients must be proportional.",
          "The $y$ coefficient was multiplied by $4$. What must happen to the $x$ coefficient?"
        ],
        "solution": [
          "Parallel lines need $6/k = 1/4$, so $k = 24$",
          "Check: the constants $8\\cdot4 = 32 \\ne 6$, so the lines are distinct."
        ],
        "position": 16
      },
      {
        "id": "A-S1-4",
        "skill": "S1",
        "template": "L5",
        "difficulty": 3,
        "stem": "Which of the following is the solution set of $-6x + 9 < -3$?",
        "choices": [
          {
            "text": "x < 2",
            "correct": false,
            "misconception": "forgot-to-flip-inequality",
            "label": "A"
          },
          {
            "text": "x > 2",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "x > -2",
            "correct": false,
            "misconception": "sign-error-dividing-by-negative",
            "label": "C"
          },
          {
            "text": "x < -2",
            "correct": false,
            "misconception": "sign-error-and-no-flip",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "What happens to an inequality when you multiply or divide both sides by a negative number?",
          "Isolate the $x$ term first, then divide by its coefficient, watching the sign.",
          "Subtracting gives $-6x < -12$. Now divide by $-6$ carefully."
        ],
        "solution": [
          "$-6x < -12$",
          "Divide by $-6$ and flip: $x > 2$"
        ],
        "position": 17
      },
      {
        "id": "A-S4-4",
        "skill": "S4",
        "template": "T5",
        "difficulty": 3,
        "stem": "How is the graph of $g(x) = -2f(x) - 5$ obtained from the graph of $y = f(x)$?",
        "choices": [
          {
            "text": "\\text{Reflect over the x-axis, stretch vertically by 2, shift 5 down}",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "\\text{Reflect over the y-axis, stretch vertically by 2, shift 5 down}",
            "correct": false,
            "misconception": "confused-reflection-axes",
            "label": "B"
          },
          {
            "text": "\\text{Reflect over the x-axis, shrink vertically by a factor of } 1/2\\text{, shift 5 down}",
            "correct": false,
            "misconception": "stretch-vs-shrink",
            "label": "C"
          },
          {
            "text": "\\text{Reflect over the x-axis, stretch vertically by 2, shift 5 up}",
            "correct": false,
            "misconception": "vertical-shift-direction",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "Which part of the rule changes the outputs (y-values), and which would change the inputs?",
          "A negative multiplier outside $f$ flips y-values over the x-axis; its size stretches; the added constant shifts.",
          "Multiplying outputs by $-2$ both flips and stretches; then $-5$ is added to every output."
        ],
        "solution": [
          "$-1$: reflect over the x-axis; $2$: vertical stretch by 2",
          "$- 5$: shift 5 units down"
        ],
        "position": 18
      },
      {
        "id": "A-S3-5",
        "skill": "S3",
        "template": "F6",
        "difficulty": 3,
        "stem": "If $f(x) = x^{2} - 3 x$, which expression is equivalent to $f(x - 2)$?",
        "choices": [
          {
            "text": "x^{2} - 3 x + 6",
            "correct": false,
            "misconception": "substituted-only-in-linear-term",
            "label": "A"
          },
          {
            "text": "x^{2} - 3 x - 2",
            "correct": false,
            "misconception": "added-h-to-output",
            "label": "B"
          },
          {
            "text": "x^{2} - 7 x + 10",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "x^{2} - 3 x + 10",
            "correct": false,
            "misconception": "squared-binomial-without-middle-term",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "What does it mean to evaluate a function at an expression instead of a number?",
          "Replace every $x$ in $f$ with $(x - 2)$, then expand.",
          "$f(x - 2) = (x - 2)^2 - 3(x - 2)$."
        ],
        "solution": [
          "$(x - 2)^2 = x^{2} - 4 x + 4$",
          "Total: $x^{2} - 7 x + 10$"
        ],
        "position": 19
      },
      {
        "id": "A-S2-4",
        "skill": "S2",
        "template": "Q5",
        "difficulty": 3,
        "stem": "What is the minimum value of the function $f(x) = x^{2} + 6 x + 21$?",
        "choices": [
          {
            "text": "30",
            "correct": false,
            "misconception": "sign-error-completing-square",
            "label": "A"
          },
          {
            "text": "-3",
            "correct": false,
            "misconception": "reported-x-of-vertex",
            "label": "B"
          },
          {
            "text": "12",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "21",
            "correct": false,
            "misconception": "reported-y-intercept",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "Where does an upward-opening parabola reach its lowest point?",
          "The vertex is at $x = -\\dfrac{b}{2a}$; the minimum value is $f$ evaluated there.",
          "The vertex is at $x = -3$. Now find $f(-3)$."
        ],
        "solution": [
          "$x = -\\dfrac{6}{2} = -3$",
          "$f(-3) = 9 - 18 + 21 = 12$"
        ],
        "position": 20
      }
    ],
    "B": [
      {
        "id": "B-S3-1",
        "skill": "S3",
        "template": "F1",
        "difficulty": 1,
        "stem": "If $f(x) = 3 x^{2} - 9 x + 10$, what is $f(-2)$?",
        "choices": [
          {
            "text": "16",
            "correct": false,
            "misconception": "negative-squared-sign-error",
            "label": "A"
          },
          {
            "text": "40",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "30",
            "correct": false,
            "misconception": "dropped-constant-term",
            "label": "C"
          },
          {
            "text": "4",
            "correct": false,
            "misconception": "sign-error-linear-term",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "What does $f(-2)$ mean you should do with the number in parentheses?",
          "Replace every $x$ with the input, using parentheses around negative numbers.",
          "$(-2)^2 = 4$, so the first term is $3\\cdot4$."
        ],
        "solution": [
          "$f(-2) = 3(-2)^2 - 9(-2) + 10$",
          "$= 40$"
        ],
        "position": 1
      },
      {
        "id": "B-S4-1",
        "skill": "S4",
        "template": "T1",
        "difficulty": 1,
        "stem": "The graph of $y = x^2$ is shifted 3 units right and 6 units down. Which equation describes the new graph?",
        "choices": [
          {
            "text": "y = (x - 3)^2 + 6",
            "correct": false,
            "misconception": "vertical-shift-direction-reversed",
            "label": "A"
          },
          {
            "text": "y = (x + 3)^2 + 6",
            "correct": false,
            "misconception": "both-shift-directions-reversed",
            "label": "B"
          },
          {
            "text": "y = (x + 3)^2 - 6",
            "correct": false,
            "misconception": "horizontal-shift-direction-reversed",
            "label": "C"
          },
          {
            "text": "y = (x - 3)^2 - 6",
            "correct": true,
            "misconception": null,
            "label": "D"
          }
        ],
        "answer": "D",
        "hints": [
          "Where does the vertex of $y = x^2$ move to after the shifts?",
          "In $y = (x - h)^2 + k$, the vertex is at $(h, k)$. Shifting right makes $h$ positive.",
          "The new vertex is at $(3, -6)$."
        ],
        "solution": [
          "Vertex moves to $(3, -6)$",
          "$y = (x - 3)^2 - 6$"
        ],
        "position": 2
      },
      {
        "id": "B-S1-1",
        "skill": "S1",
        "template": "L1",
        "difficulty": 1,
        "stem": "If $6x + 9 = -27$, what is the value of $x$?",
        "choices": [
          {
            "text": "-42",
            "correct": false,
            "misconception": "subtracted-coefficient-instead-of-dividing",
            "label": "A"
          },
          {
            "text": "-3",
            "correct": false,
            "misconception": "sign-error-moving-term",
            "label": "B"
          },
          {
            "text": "-6",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "- \\frac{27}{2}",
            "correct": false,
            "misconception": "inverse-operations-wrong-order",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "What operation is being done to $x$ first, and what is done last?",
          "Undo operations in reverse order: deal with the constant term before the coefficient.",
          "Start by subtracting $9$ from both sides: $6x = -36$."
        ],
        "solution": [
          "$6x = -27 - (9) = -36$",
          "$x = -36 / 6 = -6$"
        ],
        "position": 3
      },
      {
        "id": "B-S2-1",
        "skill": "S2",
        "template": "Q1",
        "difficulty": 1,
        "stem": "For $x \\ne 0$, which expression is equivalent to $\\dfrac{x^{6} \\cdot x^{2}}{x^{4}}$?",
        "choices": [
          {
            "text": "x^{3}",
            "correct": false,
            "misconception": "multiplied-then-divided-exponents",
            "label": "A"
          },
          {
            "text": "x^{4}",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "x^{12}",
            "correct": false,
            "misconception": "added-exponent-when-dividing",
            "label": "C"
          },
          {
            "text": "x^{8}",
            "correct": false,
            "misconception": "multiplied-exponents-when-multiplying",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "What happens to exponents when you multiply powers with the same base? When you divide?",
          "Multiplying the same base adds exponents; dividing subtracts them.",
          "The numerator is $x^{8}$."
        ],
        "solution": [
          "$x^{6}x^{2} = x^{8}$",
          "$x^{8}/x^{4} = x^{4}$"
        ],
        "position": 4
      },
      {
        "id": "B-S1-2",
        "skill": "S1",
        "template": "L2",
        "difficulty": 2,
        "stem": "What value of $x$ satisfies $2(x - 3) = - x - 18$?",
        "choices": [
          {
            "text": "-8",
            "correct": false,
            "misconception": "sign-error-distributing-negative",
            "label": "A"
          },
          {
            "text": "-4",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "-5",
            "correct": false,
            "misconception": "distribution-to-first-term-only",
            "label": "C"
          },
          {
            "text": "-12",
            "correct": false,
            "misconception": "sign-error-collecting-like-terms",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "What must happen to the parentheses before you can collect the $x$ terms?",
          "Distribute the outside factor to every term inside, then get all $x$ terms on one side.",
          "Distributing gives $2x - 6 = - x - 18$."
        ],
        "solution": [
          "$2x - 6 = - x - 18$",
          "$3x = -12$",
          "$x = -4$"
        ],
        "position": 5
      },
      {
        "id": "B-S2-3",
        "skill": "S2",
        "template": "Q3",
        "difficulty": 2,
        "stem": "Which of the following is equivalent to $(3 x - 9)^2$?",
        "choices": [
          {
            "text": "9 x^{2} - 54 x + 81",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "9 x^{2} - 27 x + 81",
            "correct": false,
            "misconception": "missing-factor-2-in-middle-term",
            "label": "B"
          },
          {
            "text": "3 x^{2} - 54 x + 81",
            "correct": false,
            "misconception": "coefficient-not-squared",
            "label": "C"
          },
          {
            "text": "9 x^{2} + 81",
            "correct": false,
            "misconception": "squared-each-term-separately",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "Write the square as a product of two identical binomials.",
          "Use FOIL or the pattern $(a+b)^2 = a^2 + 2ab + b^2$.",
          "The middle term is $2 \\cdot (3 x) \\cdot (-9)$."
        ],
        "solution": [
          "$(3 x - 9)^2 = (3 x)^2 + 2(3 x)(-9) + (-9)^2$",
          "$= 9 x^{2} - 54 x + 81$"
        ],
        "position": 6
      },
      {
        "id": "B-S4-2",
        "skill": "S4",
        "template": "T2",
        "difficulty": 2,
        "stem": "What are the coordinates of the vertex of the graph of $y = \\frac{1}{2}(x + 1)^2 - 3$?",
        "choices": [
          {
            "text": "(1, -3)",
            "correct": false,
            "misconception": "sign-of-h-in-vertex-form",
            "label": "A"
          },
          {
            "text": "(-3, -1)",
            "correct": false,
            "misconception": "swapped-coordinates",
            "label": "B"
          },
          {
            "text": "(-1, 3)",
            "correct": false,
            "misconception": "sign-of-k-in-vertex-form",
            "label": "C"
          },
          {
            "text": "(-1, -3)",
            "correct": true,
            "misconception": null,
            "label": "D"
          }
        ],
        "answer": "D",
        "hints": [
          "What value of $x$ makes the squared part equal to zero?",
          "In $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Watch the sign inside the parentheses.",
          "The squared part is zero when $x = -1$."
        ],
        "solution": [
          "$x = -1$ makes $(x + 1)^2 = 0$",
          "Then $y = -3$, so the vertex is $(-1, -3)$"
        ],
        "position": 7
      },
      {
        "id": "B-S4-3",
        "skill": "S4",
        "template": "T3",
        "difficulty": 2,
        "stem": "A line passes through the points $(1, 8)$ and $(6, 23)$. What is its $y$-intercept?",
        "choices": [
          {
            "text": "5",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "3",
            "correct": false,
            "misconception": "reported-slope",
            "label": "B"
          },
          {
            "text": "-5",
            "correct": false,
            "misconception": "sign-error-intercept",
            "label": "C"
          },
          {
            "text": "11",
            "correct": false,
            "misconception": "sign-error-solving-for-b",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "What two pieces of information define a line in slope-intercept form?",
          "Find the slope with rise over run, then substitute one point into $y = mx + b$.",
          "The slope is $\\dfrac{23 - (8)}{6 - (1)} = 3$."
        ],
        "solution": [
          "$m = 3$",
          "$8 = 3(1) + b \\Rightarrow b = 5$"
        ],
        "position": 8
      },
      {
        "id": "B-S3-2",
        "skill": "S3",
        "template": "F2",
        "difficulty": 2,
        "stem": "If $f(x) = 2 x - 9$ and $g(x) = x^{2} + 4$, what is $f(g(2))$?",
        "choices": [
          {
            "text": "3",
            "correct": false,
            "misconception": "added-instead-of-composed",
            "label": "A"
          },
          {
            "text": "-40",
            "correct": false,
            "misconception": "multiplied-instead-of-composed",
            "label": "B"
          },
          {
            "text": "29",
            "correct": false,
            "misconception": "composed-in-wrong-order",
            "label": "C"
          },
          {
            "text": "7",
            "correct": true,
            "misconception": null,
            "label": "D"
          }
        ],
        "answer": "D",
        "hints": [
          "Which function do you evaluate first in $f(g(x))$?",
          "Work from the inside out: find $g$ of the number, then use that output as the input to $f$.",
          "$g(2) = 8$. Now find $f(8)$."
        ],
        "solution": [
          "$g(2) = 8$",
          "$f(8) = 7$"
        ],
        "position": 9
      },
      {
        "id": "B-S2-2",
        "skill": "S2",
        "template": "Q2",
        "difficulty": 2,
        "stem": "What is the solution set of $x^{2} + 3 x - 28 = 0$?",
        "choices": [
          {
            "text": "\\{4, 7\\}",
            "correct": false,
            "misconception": "sign-error-one-root",
            "label": "A"
          },
          {
            "text": "\\{-4, 7\\}",
            "correct": false,
            "misconception": "used-factor-constants-as-roots",
            "label": "B"
          },
          {
            "text": "\\{-7, 4\\}",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "\\{-7, -4\\}",
            "correct": false,
            "misconception": "sign-error-one-root",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "Can the left side be written as a product of two binomials?",
          "Look for two numbers that multiply to $-28$ and add to $3$.",
          "The factors are $(x + 7)(x - 4)$. What makes each factor zero?"
        ],
        "solution": [
          "$x^{2} + 3 x - 28 = (x + 7)(x - 4)$",
          "Each factor is zero when $x = -7$ or $x = 4$"
        ],
        "position": 10
      },
      {
        "id": "B-S1-3",
        "skill": "S1",
        "template": "L3",
        "difficulty": 2,
        "stem": "In the system below, what is the value of $x$?\n$5 x - 4 y = 21$\n$- 5 x - 2 y = -27$",
        "choices": [
          {
            "text": "5",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "6",
            "correct": false,
            "misconception": "reported-sum-of-variables",
            "label": "B"
          },
          {
            "text": "-5",
            "correct": false,
            "misconception": "sign-error-elimination",
            "label": "C"
          },
          {
            "text": "1",
            "correct": false,
            "misconception": "reported-other-variable",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "Can you make one variable disappear by combining the two equations?",
          "Multiply one or both equations so the $y$ coefficients are opposites, then add.",
          "Multiply the first equation by $-2$ and the second by $4$, then add to eliminate $y$."
        ],
        "solution": [
          "Eliminating $y$: $-30x = -150$",
          "$x = 5$ (and $y = 1$)"
        ],
        "position": 11
      },
      {
        "id": "B-S3-3",
        "skill": "S3",
        "template": "F3",
        "difficulty": 2,
        "stem": "What is the domain of $f(x) = \\sqrt{3 x - 21}$?",
        "choices": [
          {
            "text": "x > 7",
            "correct": false,
            "misconception": "excluded-zero-under-radical",
            "label": "A"
          },
          {
            "text": "x \\ge -7",
            "correct": false,
            "misconception": "sign-error-solving-for-x",
            "label": "B"
          },
          {
            "text": "x \\ge 7",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "\\text{all real numbers}",
            "correct": false,
            "misconception": "ignored-square-root-restriction",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "What kinds of numbers can you take the square root of and get a real result?",
          "Set the expression under the radical greater than or equal to zero and solve.",
          "Solve $3 x - 21 \\ge 0$."
        ],
        "solution": [
          "$3 x - 21 \\ge 0$",
          "$x \\ge 7$"
        ],
        "position": 12
      },
      {
        "id": "B-S3-5",
        "skill": "S3",
        "template": "F6",
        "difficulty": 3,
        "stem": "If $f(x) = x^{2} - x$, which expression is equivalent to $f(x + 3)$?",
        "choices": [
          {
            "text": "x^{2} - x + 6",
            "correct": false,
            "misconception": "squared-binomial-without-middle-term",
            "label": "A"
          },
          {
            "text": "x^{2} + 5 x + 6",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "x^{2} - x - 3",
            "correct": false,
            "misconception": "substituted-only-in-linear-term",
            "label": "C"
          },
          {
            "text": "x^{2} - x + 3",
            "correct": false,
            "misconception": "added-h-to-output",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "What does it mean to evaluate a function at an expression instead of a number?",
          "Replace every $x$ in $f$ with $(x + 3)$, then expand.",
          "$f(x + 3) = (x + 3)^2 - 1(x + 3)$."
        ],
        "solution": [
          "$(x + 3)^2 = x^{2} + 6 x + 9$",
          "Total: $x^{2} + 5 x + 6$"
        ],
        "position": 13
      },
      {
        "id": "B-S4-4",
        "skill": "S4",
        "template": "T5",
        "difficulty": 3,
        "stem": "How is the graph of $g(x) = -3f(x) + 5$ obtained from the graph of $y = f(x)$?",
        "choices": [
          {
            "text": "\\text{Reflect over the x-axis, stretch vertically by 3, shift 5 down}",
            "correct": false,
            "misconception": "vertical-shift-direction",
            "label": "A"
          },
          {
            "text": "\\text{Reflect over the y-axis, stretch vertically by 3, shift 5 up}",
            "correct": false,
            "misconception": "confused-reflection-axes",
            "label": "B"
          },
          {
            "text": "\\text{Reflect over the x-axis, stretch vertically by 3, shift 5 up}",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "\\text{Reflect over the x-axis, shrink vertically by a factor of } 1/3\\text{, shift 5 up}",
            "correct": false,
            "misconception": "stretch-vs-shrink",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "Which part of the rule changes the outputs (y-values), and which would change the inputs?",
          "A negative multiplier outside $f$ flips y-values over the x-axis; its size stretches; the added constant shifts.",
          "Multiplying outputs by $-3$ both flips and stretches; then $5$ is added to every output."
        ],
        "solution": [
          "$-1$: reflect over the x-axis; $3$: vertical stretch by 3",
          "$+ 5$: shift 5 units up"
        ],
        "position": 14
      },
      {
        "id": "B-S3-4",
        "skill": "S3",
        "template": "F5",
        "difficulty": 3,
        "stem": "If $f(x) = 4 x + 1$, what is $f^{-1}(17)$?",
        "choices": [
          {
            "text": "69",
            "correct": false,
            "misconception": "evaluated-f-not-inverse",
            "label": "A"
          },
          {
            "text": "\\frac{1}{17}",
            "correct": false,
            "misconception": "inverse-as-reciprocal",
            "label": "B"
          },
          {
            "text": "\\frac{9}{2}",
            "correct": false,
            "misconception": "sign-error-undoing-addition",
            "label": "C"
          },
          {
            "text": "4",
            "correct": true,
            "misconception": null,
            "label": "D"
          }
        ],
        "answer": "D",
        "hints": [
          "$f^{-1}(17)$ asks: what input to $f$ gives an output of $17$?",
          "Set $f(x) = 17$ and solve for $x$.",
          "Solve $4 x + 1 = 17$."
        ],
        "solution": [
          "$4 x + 1 = 17$",
          "$4x = 16$, so $x = 4$"
        ],
        "position": 15
      },
      {
        "id": "B-S4-5",
        "skill": "S4",
        "template": "T6",
        "difficulty": 3,
        "stem": "At how many points do the graphs of $y = x^{2} + 1$ and $y = - 6 x - 4$ intersect?",
        "choices": [
          {
            "text": "1",
            "correct": false,
            "misconception": "assumed-tangent",
            "label": "A"
          },
          {
            "text": "2",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "\\text{Infinitely many}",
            "correct": false,
            "misconception": "confused-intersection-with-identical-graphs",
            "label": "C"
          },
          {
            "text": "0",
            "correct": false,
            "misconception": "sign-error-discriminant",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "What equation do you get by setting the two $y$-expressions equal?",
          "The number of real solutions of the resulting quadratic equals the number of intersection points. Use the discriminant.",
          "Setting them equal gives $x^{2} + 6 x + 5 = 0$."
        ],
        "solution": [
          "$x^{2} + 6 x + 5 = 0$, discriminant $= 36 - 4(5) = 16$",
          "Discriminant > 0, so 2 point(s)"
        ],
        "position": 16
      },
      {
        "id": "B-S2-4",
        "skill": "S2",
        "template": "Q5",
        "difficulty": 3,
        "stem": "What is the minimum value of the function $f(x) = x^{2} - 2 x + 19$?",
        "choices": [
          {
            "text": "18",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "1",
            "correct": false,
            "misconception": "reported-x-of-vertex",
            "label": "B"
          },
          {
            "text": "20",
            "correct": false,
            "misconception": "sign-error-completing-square",
            "label": "C"
          },
          {
            "text": "19",
            "correct": false,
            "misconception": "reported-y-intercept",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "Where does an upward-opening parabola reach its lowest point?",
          "The vertex is at $x = -\\dfrac{b}{2a}$; the minimum value is $f$ evaluated there.",
          "The vertex is at $x = 1$. Now find $f(1)$."
        ],
        "solution": [
          "$x = -\\dfrac{-2}{2} = 1$",
          "$f(1) = 1 - 2 + 19 = 18$"
        ],
        "position": 17
      },
      {
        "id": "B-S2-5",
        "skill": "S2",
        "template": "Q6",
        "difficulty": 3,
        "stem": "For what value of $c$ does $x^2 - 10x + c = 0$ have exactly one real solution?",
        "choices": [
          {
            "text": "50",
            "correct": false,
            "misconception": "discriminant-factor-error",
            "label": "A"
          },
          {
            "text": "100",
            "correct": false,
            "misconception": "forgot-4ac-factor",
            "label": "B"
          },
          {
            "text": "-5",
            "correct": false,
            "misconception": "halved-b-but-did-not-square",
            "label": "C"
          },
          {
            "text": "25",
            "correct": true,
            "misconception": null,
            "label": "D"
          }
        ],
        "answer": "D",
        "hints": [
          "How many real solutions does a quadratic have when its discriminant is zero?",
          "Set $b^2 - 4ac = 0$ and solve for $c$.",
          "Here $a = 1$ and $b = -10$, so $100 - 4c = 0$."
        ],
        "solution": [
          "$b^2 - 4ac = 100 - 4c = 0$",
          "$c = 25$"
        ],
        "position": 18
      },
      {
        "id": "B-S1-4",
        "skill": "S1",
        "template": "L5",
        "difficulty": 3,
        "stem": "Which of the following is the solution set of $-4x - 8 < 8$?",
        "choices": [
          {
            "text": "x < -4",
            "correct": false,
            "misconception": "forgot-to-flip-inequality",
            "label": "A"
          },
          {
            "text": "x < 4",
            "correct": false,
            "misconception": "sign-error-and-no-flip",
            "label": "B"
          },
          {
            "text": "x > -4",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "x > 4",
            "correct": false,
            "misconception": "sign-error-dividing-by-negative",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "What happens to an inequality when you multiply or divide both sides by a negative number?",
          "Isolate the $x$ term first, then divide by its coefficient, watching the sign.",
          "Subtracting gives $-4x < 16$. Now divide by $-4$ carefully."
        ],
        "solution": [
          "$-4x < 16$",
          "Divide by $-4$ and flip: $x > -4$"
        ],
        "position": 19
      },
      {
        "id": "B-S1-5",
        "skill": "S1",
        "template": "L6",
        "difficulty": 3,
        "stem": "For what value of $k$ does the system below have no solution?\n$3 x + 3 y = 2$\n$kx + 9y = 3$",
        "choices": [
          {
            "text": "3",
            "correct": false,
            "misconception": "equal-coefficients-not-proportional",
            "label": "A"
          },
          {
            "text": "27",
            "correct": false,
            "misconception": "multiplied-wrong-coefficients",
            "label": "B"
          },
          {
            "text": "9",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "1",
            "correct": false,
            "misconception": "divided-instead-of-scaled",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "What do the graphs of two equations look like when the system has no solution?",
          "Parallel lines have the same slope but different intercepts, so the coefficients must be proportional.",
          "The $y$ coefficient was multiplied by $3$. What must happen to the $x$ coefficient?"
        ],
        "solution": [
          "Parallel lines need $3/k = 3/9$, so $k = 9$",
          "Check: the constants $2\\cdot3 = 6 \\ne 3$, so the lines are distinct."
        ],
        "position": 20
      }
    ],
    "C": [
      {
        "id": "C-S2-1",
        "skill": "S2",
        "template": "Q1",
        "difficulty": 1,
        "stem": "For $x \\ne 0$, which expression is equivalent to $\\dfrac{x^{5} \\cdot x^{6}}{x^{6}}$?",
        "choices": [
          {
            "text": "x^{5}",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "x^{24}",
            "correct": false,
            "misconception": "multiplied-exponents-when-multiplying",
            "label": "B"
          },
          {
            "text": "x^{6}",
            "correct": false,
            "misconception": "arithmetic-slip",
            "label": "C"
          },
          {
            "text": "x^{17}",
            "correct": false,
            "misconception": "added-exponent-when-dividing",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "What happens to exponents when you multiply powers with the same base? When you divide?",
          "Multiplying the same base adds exponents; dividing subtracts them.",
          "The numerator is $x^{11}$."
        ],
        "solution": [
          "$x^{5}x^{6} = x^{11}$",
          "$x^{11}/x^{6} = x^{5}$"
        ],
        "position": 1
      },
      {
        "id": "C-S4-1",
        "skill": "S4",
        "template": "T1",
        "difficulty": 1,
        "stem": "The graph of $y = x^2$ is shifted 2 units right and 7 units up. Which equation describes the new graph?",
        "choices": [
          {
            "text": "y = (x + 2)^2 + 7",
            "correct": false,
            "misconception": "horizontal-shift-direction-reversed",
            "label": "A"
          },
          {
            "text": "y = (x - 2)^2 + 7",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "y = (x + 2)^2 - 7",
            "correct": false,
            "misconception": "both-shift-directions-reversed",
            "label": "C"
          },
          {
            "text": "y = (x - 2)^2 - 7",
            "correct": false,
            "misconception": "vertical-shift-direction-reversed",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "Where does the vertex of $y = x^2$ move to after the shifts?",
          "In $y = (x - h)^2 + k$, the vertex is at $(h, k)$. Shifting right makes $h$ positive.",
          "The new vertex is at $(2, 7)$."
        ],
        "solution": [
          "Vertex moves to $(2, 7)$",
          "$y = (x - 2)^2 + 7$"
        ],
        "position": 2
      },
      {
        "id": "C-S1-1",
        "skill": "S1",
        "template": "L1",
        "difficulty": 1,
        "stem": "If $7x + 12 = -2$, what is the value of $x$?",
        "choices": [
          {
            "text": "- \\frac{86}{7}",
            "correct": false,
            "misconception": "inverse-operations-wrong-order",
            "label": "A"
          },
          {
            "text": "-21",
            "correct": false,
            "misconception": "subtracted-coefficient-instead-of-dividing",
            "label": "B"
          },
          {
            "text": "\\frac{10}{7}",
            "correct": false,
            "misconception": "sign-error-moving-term",
            "label": "C"
          },
          {
            "text": "-2",
            "correct": true,
            "misconception": null,
            "label": "D"
          }
        ],
        "answer": "D",
        "hints": [
          "What operation is being done to $x$ first, and what is done last?",
          "Undo operations in reverse order: deal with the constant term before the coefficient.",
          "Start by subtracting $12$ from both sides: $7x = -14$."
        ],
        "solution": [
          "$7x = -2 - (12) = -14$",
          "$x = -14 / 7 = -2$"
        ],
        "position": 3
      },
      {
        "id": "C-S3-1",
        "skill": "S3",
        "template": "F1",
        "difficulty": 1,
        "stem": "If $f(x) = - 3 x^{2} - 8 x + 8$, what is $f(-2)$?",
        "choices": [
          {
            "text": "12",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "-20",
            "correct": false,
            "misconception": "sign-error-linear-term",
            "label": "B"
          },
          {
            "text": "4",
            "correct": false,
            "misconception": "dropped-constant-term",
            "label": "C"
          },
          {
            "text": "36",
            "correct": false,
            "misconception": "negative-squared-sign-error",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "What does $f(-2)$ mean you should do with the number in parentheses?",
          "Replace every $x$ with the input, using parentheses around negative numbers.",
          "$(-2)^2 = 4$, so the first term is $-3\\cdot4$."
        ],
        "solution": [
          "$f(-2) = -3(-2)^2 - 8(-2) + 8$",
          "$= 12$"
        ],
        "position": 4
      },
      {
        "id": "C-S3-3",
        "skill": "S3",
        "template": "F3",
        "difficulty": 2,
        "stem": "What is the domain of $f(x) = \\sqrt{3 x - 6}$?",
        "choices": [
          {
            "text": "x > 2",
            "correct": false,
            "misconception": "excluded-zero-under-radical",
            "label": "A"
          },
          {
            "text": "x \\ge 2",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "x \\ge -2",
            "correct": false,
            "misconception": "sign-error-solving-for-x",
            "label": "C"
          },
          {
            "text": "\\text{all real numbers}",
            "correct": false,
            "misconception": "ignored-square-root-restriction",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "What kinds of numbers can you take the square root of and get a real result?",
          "Set the expression under the radical greater than or equal to zero and solve.",
          "Solve $3 x - 6 \\ge 0$."
        ],
        "solution": [
          "$3 x - 6 \\ge 0$",
          "$x \\ge 2$"
        ],
        "position": 5
      },
      {
        "id": "C-S4-3",
        "skill": "S4",
        "template": "T3",
        "difficulty": 2,
        "stem": "A line passes through the points $(2, -4)$ and $(6, -20)$. What is its $y$-intercept?",
        "choices": [
          {
            "text": "4",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "-12",
            "correct": false,
            "misconception": "sign-error-solving-for-b",
            "label": "B"
          },
          {
            "text": "-4",
            "correct": false,
            "misconception": "reported-slope",
            "label": "C"
          },
          {
            "text": "- \\frac{7}{2}",
            "correct": false,
            "misconception": "used-reciprocal-slope",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "What two pieces of information define a line in slope-intercept form?",
          "Find the slope with rise over run, then substitute one point into $y = mx + b$.",
          "The slope is $\\dfrac{-20 - (-4)}{6 - (2)} = -4$."
        ],
        "solution": [
          "$m = -4$",
          "$-4 = -4(2) + b \\Rightarrow b = 4$"
        ],
        "position": 6
      },
      {
        "id": "C-S2-2",
        "skill": "S2",
        "template": "Q2",
        "difficulty": 2,
        "stem": "What is the solution set of $x^{2} - 6 x - 27 = 0$?",
        "choices": [
          {
            "text": "\\{3, 9\\}",
            "correct": false,
            "misconception": "sign-error-one-root",
            "label": "A"
          },
          {
            "text": "\\{-9, 3\\}",
            "correct": false,
            "misconception": "used-factor-constants-as-roots",
            "label": "B"
          },
          {
            "text": "\\{-9, -3\\}",
            "correct": false,
            "misconception": "sign-error-one-root",
            "label": "C"
          },
          {
            "text": "\\{-3, 9\\}",
            "correct": true,
            "misconception": null,
            "label": "D"
          }
        ],
        "answer": "D",
        "hints": [
          "Can the left side be written as a product of two binomials?",
          "Look for two numbers that multiply to $-27$ and add to $-6$.",
          "The factors are $(x - 9)(x + 3)$. What makes each factor zero?"
        ],
        "solution": [
          "$x^{2} - 6 x - 27 = (x - 9)(x + 3)$",
          "Each factor is zero when $x = 9$ or $x = -3$"
        ],
        "position": 7
      },
      {
        "id": "C-S2-3",
        "skill": "S2",
        "template": "Q3",
        "difficulty": 2,
        "stem": "Which of the following is equivalent to $(3 x - 3)^2$?",
        "choices": [
          {
            "text": "9 x^{2} - 18 x + 9",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "9 x^{2} + 9",
            "correct": false,
            "misconception": "squared-each-term-separately",
            "label": "B"
          },
          {
            "text": "3 x^{2} - 18 x + 9",
            "correct": false,
            "misconception": "coefficient-not-squared",
            "label": "C"
          },
          {
            "text": "9 x^{2} - 9 x + 9",
            "correct": false,
            "misconception": "missing-factor-2-in-middle-term",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "Write the square as a product of two identical binomials.",
          "Use FOIL or the pattern $(a+b)^2 = a^2 + 2ab + b^2$.",
          "The middle term is $2 \\cdot (3 x) \\cdot (-3)$."
        ],
        "solution": [
          "$(3 x - 3)^2 = (3 x)^2 + 2(3 x)(-3) + (-3)^2$",
          "$= 9 x^{2} - 18 x + 9$"
        ],
        "position": 8
      },
      {
        "id": "C-S1-3",
        "skill": "S1",
        "template": "L3",
        "difficulty": 2,
        "stem": "In the system below, what is the value of $x$?\n$- 2 x - 5 y = -17$\n$2 x + 3 y = 11$",
        "choices": [
          {
            "text": "1",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "-1",
            "correct": false,
            "misconception": "sign-error-elimination",
            "label": "B"
          },
          {
            "text": "4",
            "correct": false,
            "misconception": "reported-sum-of-variables",
            "label": "C"
          },
          {
            "text": "3",
            "correct": false,
            "misconception": "reported-other-variable",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "Can you make one variable disappear by combining the two equations?",
          "Multiply one or both equations so the $y$ coefficients are opposites, then add.",
          "Multiply the first equation by $3$ and the second by $5$, then add to eliminate $y$."
        ],
        "solution": [
          "Eliminating $y$: $4x = 4$",
          "$x = 1$ (and $y = 3$)"
        ],
        "position": 9
      },
      {
        "id": "C-S4-2",
        "skill": "S4",
        "template": "T2",
        "difficulty": 2,
        "stem": "What are the coordinates of the vertex of the graph of $y = \\frac{1}{2}(x - 5)^2 - 7$?",
        "choices": [
          {
            "text": "(-7, 5)",
            "correct": false,
            "misconception": "swapped-coordinates",
            "label": "A"
          },
          {
            "text": "(5, -7)",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "(5, 7)",
            "correct": false,
            "misconception": "sign-of-k-in-vertex-form",
            "label": "C"
          },
          {
            "text": "(-5, -7)",
            "correct": false,
            "misconception": "sign-of-h-in-vertex-form",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "What value of $x$ makes the squared part equal to zero?",
          "In $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Watch the sign inside the parentheses.",
          "The squared part is zero when $x = 5$."
        ],
        "solution": [
          "$x = 5$ makes $(x - 5)^2 = 0$",
          "Then $y = -7$, so the vertex is $(5, -7)$"
        ],
        "position": 10
      },
      {
        "id": "C-S1-2",
        "skill": "S1",
        "template": "L2",
        "difficulty": 2,
        "stem": "What value of $x$ satisfies $4(x - 4) = - 5 x - 61$?",
        "choices": [
          {
            "text": "- \\frac{77}{9}",
            "correct": false,
            "misconception": "sign-error-distributing-negative",
            "label": "A"
          },
          {
            "text": "- \\frac{19}{3}",
            "correct": false,
            "misconception": "distribution-to-first-term-only",
            "label": "B"
          },
          {
            "text": "-5",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "45",
            "correct": false,
            "misconception": "sign-error-collecting-like-terms",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "What must happen to the parentheses before you can collect the $x$ terms?",
          "Distribute the outside factor to every term inside, then get all $x$ terms on one side.",
          "Distributing gives $4x - 16 = - 5 x - 61$."
        ],
        "solution": [
          "$4x - 16 = - 5 x - 61$",
          "$9x = -45$",
          "$x = -5$"
        ],
        "position": 11
      },
      {
        "id": "C-S3-2",
        "skill": "S3",
        "template": "F2",
        "difficulty": 2,
        "stem": "If $f(x) = 4 x - 9$ and $g(x) = x^{2} + 4$, what is $f(g(-2))$?",
        "choices": [
          {
            "text": "23",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "-136",
            "correct": false,
            "misconception": "multiplied-instead-of-composed",
            "label": "B"
          },
          {
            "text": "-9",
            "correct": false,
            "misconception": "added-instead-of-composed",
            "label": "C"
          },
          {
            "text": "293",
            "correct": false,
            "misconception": "composed-in-wrong-order",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "Which function do you evaluate first in $f(g(x))$?",
          "Work from the inside out: find $g$ of the number, then use that output as the input to $f$.",
          "$g(-2) = 8$. Now find $f(8)$."
        ],
        "solution": [
          "$g(-2) = 8$",
          "$f(8) = 23$"
        ],
        "position": 12
      },
      {
        "id": "C-S3-4",
        "skill": "S3",
        "template": "F5",
        "difficulty": 3,
        "stem": "If $f(x) = 2 x + 5$, what is $f^{-1}(-1)$?",
        "choices": [
          {
            "text": "-1",
            "correct": false,
            "misconception": "inverse-as-reciprocal",
            "label": "A"
          },
          {
            "text": "3",
            "correct": false,
            "misconception": "evaluated-f-not-inverse",
            "label": "B"
          },
          {
            "text": "-3",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "2",
            "correct": false,
            "misconception": "sign-error-undoing-addition",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "$f^{-1}(-1)$ asks: what input to $f$ gives an output of $-1$?",
          "Set $f(x) = -1$ and solve for $x$.",
          "Solve $2 x + 5 = -1$."
        ],
        "solution": [
          "$2 x + 5 = -1$",
          "$2x = -6$, so $x = -3$"
        ],
        "position": 13
      },
      {
        "id": "C-S1-5",
        "skill": "S1",
        "template": "L6",
        "difficulty": 3,
        "stem": "For what value of $k$ does the system below have no solution?\n$6 x + y = 4$\n$kx + 4y = 9$",
        "choices": [
          {
            "text": "4",
            "correct": false,
            "misconception": "matched-y-coefficient-not-ratio",
            "label": "A"
          },
          {
            "text": "\\frac{3}{2}",
            "correct": false,
            "misconception": "divided-instead-of-scaled",
            "label": "B"
          },
          {
            "text": "6",
            "correct": false,
            "misconception": "equal-coefficients-not-proportional",
            "label": "C"
          },
          {
            "text": "24",
            "correct": true,
            "misconception": null,
            "label": "D"
          }
        ],
        "answer": "D",
        "hints": [
          "What do the graphs of two equations look like when the system has no solution?",
          "Parallel lines have the same slope but different intercepts, so the coefficients must be proportional.",
          "The $y$ coefficient was multiplied by $4$. What must happen to the $x$ coefficient?"
        ],
        "solution": [
          "Parallel lines need $6/k = 1/4$, so $k = 24$",
          "Check: the constants $4\\cdot4 = 16 \\ne 9$, so the lines are distinct."
        ],
        "position": 14
      },
      {
        "id": "C-S2-5",
        "skill": "S2",
        "template": "Q6",
        "difficulty": 3,
        "stem": "For what value of $c$ does $x^2 - 2x + c = 0$ have exactly one real solution?",
        "choices": [
          {
            "text": "4",
            "correct": false,
            "misconception": "forgot-4ac-factor",
            "label": "A"
          },
          {
            "text": "-1",
            "correct": false,
            "misconception": "halved-b-but-did-not-square",
            "label": "B"
          },
          {
            "text": "1",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "2",
            "correct": false,
            "misconception": "discriminant-factor-error",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "How many real solutions does a quadratic have when its discriminant is zero?",
          "Set $b^2 - 4ac = 0$ and solve for $c$.",
          "Here $a = 1$ and $b = -2$, so $4 - 4c = 0$."
        ],
        "solution": [
          "$b^2 - 4ac = 4 - 4c = 0$",
          "$c = 1$"
        ],
        "position": 15
      },
      {
        "id": "C-S4-5",
        "skill": "S4",
        "template": "T6",
        "difficulty": 3,
        "stem": "At how many points do the graphs of $y = x^{2} - 4$ and $y = - 5 x - 8$ intersect?",
        "choices": [
          {
            "text": "2",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "\\text{Infinitely many}",
            "correct": false,
            "misconception": "confused-intersection-with-identical-graphs",
            "label": "B"
          },
          {
            "text": "1",
            "correct": false,
            "misconception": "assumed-tangent",
            "label": "C"
          },
          {
            "text": "0",
            "correct": false,
            "misconception": "sign-error-discriminant",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "What equation do you get by setting the two $y$-expressions equal?",
          "The number of real solutions of the resulting quadratic equals the number of intersection points. Use the discriminant.",
          "Setting them equal gives $x^{2} + 5 x + 4 = 0$."
        ],
        "solution": [
          "$x^{2} + 5 x + 4 = 0$, discriminant $= 25 - 4(4) = 9$",
          "Discriminant > 0, so 2 point(s)"
        ],
        "position": 16
      },
      {
        "id": "C-S4-4",
        "skill": "S4",
        "template": "T5",
        "difficulty": 3,
        "stem": "How is the graph of $g(x) = -2f(x) + 3$ obtained from the graph of $y = f(x)$?",
        "choices": [
          {
            "text": "\\text{Reflect over the x-axis, shrink vertically by a factor of } 1/2\\text{, shift 3 up}",
            "correct": false,
            "misconception": "stretch-vs-shrink",
            "label": "A"
          },
          {
            "text": "\\text{Reflect over the x-axis, stretch vertically by 2, shift 3 down}",
            "correct": false,
            "misconception": "vertical-shift-direction",
            "label": "B"
          },
          {
            "text": "\\text{Reflect over the x-axis, stretch vertically by 2, shift 3 up}",
            "correct": true,
            "misconception": null,
            "label": "C"
          },
          {
            "text": "\\text{Reflect over the y-axis, stretch vertically by 2, shift 3 up}",
            "correct": false,
            "misconception": "confused-reflection-axes",
            "label": "D"
          }
        ],
        "answer": "C",
        "hints": [
          "Which part of the rule changes the outputs (y-values), and which would change the inputs?",
          "A negative multiplier outside $f$ flips y-values over the x-axis; its size stretches; the added constant shifts.",
          "Multiplying outputs by $-2$ both flips and stretches; then $3$ is added to every output."
        ],
        "solution": [
          "$-1$: reflect over the x-axis; $2$: vertical stretch by 2",
          "$+ 3$: shift 3 units up"
        ],
        "position": 17
      },
      {
        "id": "C-S2-4",
        "skill": "S2",
        "template": "Q5",
        "difficulty": 3,
        "stem": "What is the minimum value of the function $f(x) = x^{2} - 2 x + 26$?",
        "choices": [
          {
            "text": "25",
            "correct": true,
            "misconception": null,
            "label": "A"
          },
          {
            "text": "27",
            "correct": false,
            "misconception": "sign-error-completing-square",
            "label": "B"
          },
          {
            "text": "26",
            "correct": false,
            "misconception": "reported-y-intercept",
            "label": "C"
          },
          {
            "text": "1",
            "correct": false,
            "misconception": "reported-x-of-vertex",
            "label": "D"
          }
        ],
        "answer": "A",
        "hints": [
          "Where does an upward-opening parabola reach its lowest point?",
          "The vertex is at $x = -\\dfrac{b}{2a}$; the minimum value is $f$ evaluated there.",
          "The vertex is at $x = 1$. Now find $f(1)$."
        ],
        "solution": [
          "$x = -\\dfrac{-2}{2} = 1$",
          "$f(1) = 1 - 2 + 26 = 25$"
        ],
        "position": 18
      },
      {
        "id": "C-S1-4",
        "skill": "S1",
        "template": "L5",
        "difficulty": 3,
        "stem": "Which of the following is the solution set of $-3x - 3 < -6$?",
        "choices": [
          {
            "text": "x < 1",
            "correct": false,
            "misconception": "forgot-to-flip-inequality",
            "label": "A"
          },
          {
            "text": "x > 1",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "x > -1",
            "correct": false,
            "misconception": "sign-error-dividing-by-negative",
            "label": "C"
          },
          {
            "text": "x < -1",
            "correct": false,
            "misconception": "sign-error-and-no-flip",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "What happens to an inequality when you multiply or divide both sides by a negative number?",
          "Isolate the $x$ term first, then divide by its coefficient, watching the sign.",
          "Subtracting gives $-3x < -3$. Now divide by $-3$ carefully."
        ],
        "solution": [
          "$-3x < -3$",
          "Divide by $-3$ and flip: $x > 1$"
        ],
        "position": 19
      },
      {
        "id": "C-S3-5",
        "skill": "S3",
        "template": "F6",
        "difficulty": 3,
        "stem": "If $f(x) = x^{2} - x$, which expression is equivalent to $f(x - 1)$?",
        "choices": [
          {
            "text": "x^{2} - x - 1",
            "correct": false,
            "misconception": "added-h-to-output",
            "label": "A"
          },
          {
            "text": "x^{2} - 3 x + 2",
            "correct": true,
            "misconception": null,
            "label": "B"
          },
          {
            "text": "x^{2} - x + 1",
            "correct": false,
            "misconception": "substituted-only-in-linear-term",
            "label": "C"
          },
          {
            "text": "x^{2} - x + 2",
            "correct": false,
            "misconception": "squared-binomial-without-middle-term",
            "label": "D"
          }
        ],
        "answer": "B",
        "hints": [
          "What does it mean to evaluate a function at an expression instead of a number?",
          "Replace every $x$ in $f$ with $(x - 1)$, then expand.",
          "$f(x - 1) = (x - 1)^2 - 1(x - 1)$."
        ],
        "solution": [
          "$(x - 1)^2 = x^{2} - 2 x + 1$",
          "Total: $x^{2} - 3 x + 2$"
        ],
        "position": 20
      }
    ]
  },
  "practice": [
    {
      "id": "P-S1-1",
      "skill": "S1",
      "template": "L1",
      "difficulty": 1,
      "stem": "If $2x - 11 = -9$, what is the value of $x$?",
      "choices": [
        {
          "text": "1",
          "correct": true,
          "misconception": null,
          "label": "A"
        },
        {
          "text": "\\frac{13}{2}",
          "correct": false,
          "misconception": "inverse-operations-wrong-order",
          "label": "B"
        },
        {
          "text": "0",
          "correct": false,
          "misconception": "subtracted-coefficient-instead-of-dividing",
          "label": "C"
        },
        {
          "text": "-10",
          "correct": false,
          "misconception": "sign-error-moving-term",
          "label": "D"
        }
      ],
      "answer": "A",
      "hints": [
        "What operation is being done to $x$ first, and what is done last?",
        "Undo operations in reverse order: deal with the constant term before the coefficient.",
        "Start by subtracting $-11$ from both sides: $2x = 2$."
      ],
      "solution": [
        "$2x = -9 - (-11) = 2$",
        "$x = 2 / 2 = 1$"
      ],
      "twins": [
        {
          "id": "P-S1-1-T1",
          "skill": "S1",
          "template": "L1",
          "difficulty": 1,
          "stem": "If $2x + 15 = 11$, what is the value of $x$?",
          "choices": [
            {
              "text": "- \\frac{19}{2}",
              "correct": false,
              "misconception": "inverse-operations-wrong-order",
              "label": "A"
            },
            {
              "text": "-2",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "-6",
              "correct": false,
              "misconception": "subtracted-coefficient-instead-of-dividing",
              "label": "C"
            },
            {
              "text": "13",
              "correct": false,
              "misconception": "sign-error-moving-term",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "What operation is being done to $x$ first, and what is done last?",
            "Undo operations in reverse order: deal with the constant term before the coefficient.",
            "Start by subtracting $15$ from both sides: $2x = -4$."
          ],
          "solution": [
            "$2x = 11 - (15) = -4$",
            "$x = -4 / 2 = -2$"
          ]
        },
        {
          "id": "P-S1-1-T2",
          "skill": "S1",
          "template": "L1",
          "difficulty": 1,
          "stem": "If $8x - 6 = 34$, what is the value of $x$?",
          "choices": [
            {
              "text": "\\frac{41}{4}",
              "correct": false,
              "misconception": "inverse-operations-wrong-order",
              "label": "A"
            },
            {
              "text": "5",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "\\frac{7}{2}",
              "correct": false,
              "misconception": "sign-error-moving-term",
              "label": "C"
            },
            {
              "text": "32",
              "correct": false,
              "misconception": "subtracted-coefficient-instead-of-dividing",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "What operation is being done to $x$ first, and what is done last?",
            "Undo operations in reverse order: deal with the constant term before the coefficient.",
            "Start by subtracting $-6$ from both sides: $8x = 40$."
          ],
          "solution": [
            "$8x = 34 - (-6) = 40$",
            "$x = 40 / 8 = 5$"
          ]
        }
      ]
    },
    {
      "id": "P-S1-2",
      "skill": "S1",
      "template": "L2",
      "difficulty": 2,
      "stem": "What value of $x$ satisfies $4(x - 6) = - 5 x - 96$?",
      "choices": [
        {
          "text": "- \\frac{40}{3}",
          "correct": false,
          "misconception": "sign-error-distributing-negative",
          "label": "A"
        },
        {
          "text": "72",
          "correct": false,
          "misconception": "sign-error-collecting-like-terms",
          "label": "B"
        },
        {
          "text": "-10",
          "correct": false,
          "misconception": "distribution-to-first-term-only",
          "label": "C"
        },
        {
          "text": "-8",
          "correct": true,
          "misconception": null,
          "label": "D"
        }
      ],
      "answer": "D",
      "hints": [
        "What must happen to the parentheses before you can collect the $x$ terms?",
        "Distribute the outside factor to every term inside, then get all $x$ terms on one side.",
        "Distributing gives $4x - 24 = - 5 x - 96$."
      ],
      "solution": [
        "$4x - 24 = - 5 x - 96$",
        "$9x = -72$",
        "$x = -8$"
      ],
      "twins": [
        {
          "id": "P-S1-2-T1",
          "skill": "S1",
          "template": "L2",
          "difficulty": 2,
          "stem": "What value of $x$ satisfies $7(x - 3) = 27 - x$?",
          "choices": [
            {
              "text": "\\frac{15}{4}",
              "correct": false,
              "misconception": "distribution-to-first-term-only",
              "label": "A"
            },
            {
              "text": "6",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "8",
              "correct": false,
              "misconception": "sign-error-collecting-like-terms",
              "label": "C"
            },
            {
              "text": "\\frac{3}{4}",
              "correct": false,
              "misconception": "sign-error-distributing-negative",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "What must happen to the parentheses before you can collect the $x$ terms?",
            "Distribute the outside factor to every term inside, then get all $x$ terms on one side.",
            "Distributing gives $7x - 21 = 27 - x$."
          ],
          "solution": [
            "$7x - 21 = 27 - x$",
            "$8x = 48$",
            "$x = 6$"
          ]
        },
        {
          "id": "P-S1-2-T2",
          "skill": "S1",
          "template": "L2",
          "difficulty": 2,
          "stem": "What value of $x$ satisfies $3(x - 4) = 52 - 5 x$?",
          "choices": [
            {
              "text": "-32",
              "correct": false,
              "misconception": "sign-error-collecting-like-terms",
              "label": "A"
            },
            {
              "text": "7",
              "correct": false,
              "misconception": "distribution-to-first-term-only",
              "label": "B"
            },
            {
              "text": "5",
              "correct": false,
              "misconception": "sign-error-distributing-negative",
              "label": "C"
            },
            {
              "text": "8",
              "correct": true,
              "misconception": null,
              "label": "D"
            }
          ],
          "answer": "D",
          "hints": [
            "What must happen to the parentheses before you can collect the $x$ terms?",
            "Distribute the outside factor to every term inside, then get all $x$ terms on one side.",
            "Distributing gives $3x - 12 = 52 - 5 x$."
          ],
          "solution": [
            "$3x - 12 = 52 - 5 x$",
            "$8x = 64$",
            "$x = 8$"
          ]
        }
      ]
    },
    {
      "id": "P-S1-3",
      "skill": "S1",
      "template": "L3",
      "difficulty": 2,
      "stem": "In the system below, what is the value of $x$?\n$2 x - y = 11$\n$3 x + 2 y = -1$",
      "choices": [
        {
          "text": "-2",
          "correct": false,
          "misconception": "reported-sum-of-variables",
          "label": "A"
        },
        {
          "text": "-5",
          "correct": false,
          "misconception": "reported-other-variable",
          "label": "B"
        },
        {
          "text": "3",
          "correct": true,
          "misconception": null,
          "label": "C"
        },
        {
          "text": "-3",
          "correct": false,
          "misconception": "sign-error-elimination",
          "label": "D"
        }
      ],
      "answer": "C",
      "hints": [
        "Can you make one variable disappear by combining the two equations?",
        "Multiply one or both equations so the $y$ coefficients are opposites, then add.",
        "Multiply the first equation by $2$ and the second by $1$, then add to eliminate $y$."
      ],
      "solution": [
        "Eliminating $y$: $7x = 21$",
        "$x = 3$ (and $y = -5$)"
      ],
      "twins": [
        {
          "id": "P-S1-3-T1",
          "skill": "S1",
          "template": "L3",
          "difficulty": 2,
          "stem": "In the system below, what is the value of $x$?\n$- 2 x - y = 9$\n$- 4 x + 5 y = 25$",
          "choices": [
            {
              "text": "1",
              "correct": false,
              "misconception": "reported-other-variable",
              "label": "A"
            },
            {
              "text": "-4",
              "correct": false,
              "misconception": "reported-sum-of-variables",
              "label": "B"
            },
            {
              "text": "-5",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "5",
              "correct": false,
              "misconception": "sign-error-elimination",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "Can you make one variable disappear by combining the two equations?",
            "Multiply one or both equations so the $y$ coefficients are opposites, then add.",
            "Multiply the first equation by $5$ and the second by $1$, then add to eliminate $y$."
          ],
          "solution": [
            "Eliminating $y$: $-14x = 70$",
            "$x = -5$ (and $y = 1$)"
          ]
        },
        {
          "id": "P-S1-3-T2",
          "skill": "S1",
          "template": "L3",
          "difficulty": 2,
          "stem": "In the system below, what is the value of $x$?\n$- 3 x - y = 5$\n$2 x - y = -10$",
          "choices": [
            {
              "text": "1",
              "correct": false,
              "misconception": "reported-sum-of-variables",
              "label": "A"
            },
            {
              "text": "3",
              "correct": false,
              "misconception": "sign-error-elimination",
              "label": "B"
            },
            {
              "text": "4",
              "correct": false,
              "misconception": "reported-other-variable",
              "label": "C"
            },
            {
              "text": "-3",
              "correct": true,
              "misconception": null,
              "label": "D"
            }
          ],
          "answer": "D",
          "hints": [
            "Can you make one variable disappear by combining the two equations?",
            "Multiply one or both equations so the $y$ coefficients are opposites, then add.",
            "Multiply the first equation by $-1$ and the second by $1$, then add to eliminate $y$."
          ],
          "solution": [
            "Eliminating $y$: $5x = -15$",
            "$x = -3$ (and $y = 4$)"
          ]
        }
      ]
    },
    {
      "id": "P-S1-4",
      "skill": "S1",
      "template": "L4",
      "difficulty": 2,
      "stem": "A tutoring service charges a registration fee of \\$100 plus \\$35 per session. Which equation gives the total cost $T$, in dollars, for $s$ sessions?",
      "choices": [
        {
          "text": "T = 35 s + 100",
          "correct": true,
          "misconception": null,
          "label": "A"
        },
        {
          "text": "T = 100 s + 35",
          "correct": false,
          "misconception": "swapped-rate-and-initial-value",
          "label": "B"
        },
        {
          "text": "T = 35 s - 100",
          "correct": false,
          "misconception": "sign-of-initial-value",
          "label": "C"
        },
        {
          "text": "T = 135 s",
          "correct": false,
          "misconception": "applied-fee-every-unit",
          "label": "D"
        }
      ],
      "answer": "A",
      "hints": [
        "What would the cost be if zero units of time were used?",
        "In $y = mx + b$, the slope is the rate that repeats and $b$ is the one-time amount.",
        "The one-time amount is \\$100; the amount that is multiplied by $s$ is \\$35."
      ],
      "solution": [
        "Rate (slope) = 35; starting value (intercept) = 100",
        "$T = 35 s + 100$"
      ],
      "twins": [
        {
          "id": "P-S1-4-T1",
          "skill": "S1",
          "template": "L4",
          "difficulty": 2,
          "stem": "A tutoring service charges a registration fee of \\$20 plus \\$85 per session. Which equation gives the total cost $T$, in dollars, for $s$ sessions?",
          "choices": [
            {
              "text": "T = 105 s",
              "correct": false,
              "misconception": "applied-fee-every-unit",
              "label": "A"
            },
            {
              "text": "T = 85 s - 20",
              "correct": false,
              "misconception": "sign-of-initial-value",
              "label": "B"
            },
            {
              "text": "T = 20 s + 85",
              "correct": false,
              "misconception": "swapped-rate-and-initial-value",
              "label": "C"
            },
            {
              "text": "T = 85 s + 20",
              "correct": true,
              "misconception": null,
              "label": "D"
            }
          ],
          "answer": "D",
          "hints": [
            "What would the cost be if zero units of time were used?",
            "In $y = mx + b$, the slope is the rate that repeats and $b$ is the one-time amount.",
            "The one-time amount is \\$20; the amount that is multiplied by $s$ is \\$85."
          ],
          "solution": [
            "Rate (slope) = 85; starting value (intercept) = 20",
            "$T = 85 s + 20$"
          ]
        },
        {
          "id": "P-S1-4-T2",
          "skill": "S1",
          "template": "L4",
          "difficulty": 2,
          "stem": "A tutoring service charges a registration fee of \\$45 plus \\$40 per session. Which equation gives the total cost $T$, in dollars, for $s$ sessions?",
          "choices": [
            {
              "text": "T = 40 s - 45",
              "correct": false,
              "misconception": "sign-of-initial-value",
              "label": "A"
            },
            {
              "text": "T = 40 s + 45",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "T = 45 s + 40",
              "correct": false,
              "misconception": "swapped-rate-and-initial-value",
              "label": "C"
            },
            {
              "text": "T = 85 s",
              "correct": false,
              "misconception": "applied-fee-every-unit",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "What would the cost be if zero units of time were used?",
            "In $y = mx + b$, the slope is the rate that repeats and $b$ is the one-time amount.",
            "The one-time amount is \\$45; the amount that is multiplied by $s$ is \\$40."
          ],
          "solution": [
            "Rate (slope) = 40; starting value (intercept) = 45",
            "$T = 40 s + 45$"
          ]
        }
      ]
    },
    {
      "id": "P-S1-5",
      "skill": "S1",
      "template": "L5",
      "difficulty": 3,
      "stem": "Which of the following is the solution set of $-5x - 8 < -33$?",
      "choices": [
        {
          "text": "x > -5",
          "correct": false,
          "misconception": "sign-error-dividing-by-negative",
          "label": "A"
        },
        {
          "text": "x < 5",
          "correct": false,
          "misconception": "forgot-to-flip-inequality",
          "label": "B"
        },
        {
          "text": "x < -5",
          "correct": false,
          "misconception": "sign-error-and-no-flip",
          "label": "C"
        },
        {
          "text": "x > 5",
          "correct": true,
          "misconception": null,
          "label": "D"
        }
      ],
      "answer": "D",
      "hints": [
        "What happens to an inequality when you multiply or divide both sides by a negative number?",
        "Isolate the $x$ term first, then divide by its coefficient, watching the sign.",
        "Subtracting gives $-5x < -25$. Now divide by $-5$ carefully."
      ],
      "solution": [
        "$-5x < -25$",
        "Divide by $-5$ and flip: $x > 5$"
      ],
      "twins": [
        {
          "id": "P-S1-5-T1",
          "skill": "S1",
          "template": "L5",
          "difficulty": 3,
          "stem": "Which of the following is the solution set of $-7x + 11 < 53$?",
          "choices": [
            {
              "text": "x < -6",
              "correct": false,
              "misconception": "forgot-to-flip-inequality",
              "label": "A"
            },
            {
              "text": "x > -6",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "x > 6",
              "correct": false,
              "misconception": "sign-error-dividing-by-negative",
              "label": "C"
            },
            {
              "text": "x < 6",
              "correct": false,
              "misconception": "sign-error-and-no-flip",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "What happens to an inequality when you multiply or divide both sides by a negative number?",
            "Isolate the $x$ term first, then divide by its coefficient, watching the sign.",
            "Subtracting gives $-7x < 42$. Now divide by $-7$ carefully."
          ],
          "solution": [
            "$-7x < 42$",
            "Divide by $-7$ and flip: $x > -6$"
          ]
        },
        {
          "id": "P-S1-5-T2",
          "skill": "S1",
          "template": "L5",
          "difficulty": 3,
          "stem": "Which of the following is the solution set of $-4x - 6 < -26$?",
          "choices": [
            {
              "text": "x < -5",
              "correct": false,
              "misconception": "sign-error-and-no-flip",
              "label": "A"
            },
            {
              "text": "x > -5",
              "correct": false,
              "misconception": "sign-error-dividing-by-negative",
              "label": "B"
            },
            {
              "text": "x > 5",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "x < 5",
              "correct": false,
              "misconception": "forgot-to-flip-inequality",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "What happens to an inequality when you multiply or divide both sides by a negative number?",
            "Isolate the $x$ term first, then divide by its coefficient, watching the sign.",
            "Subtracting gives $-4x < -20$. Now divide by $-4$ carefully."
          ],
          "solution": [
            "$-4x < -20$",
            "Divide by $-4$ and flip: $x > 5$"
          ]
        }
      ]
    },
    {
      "id": "P-S1-6",
      "skill": "S1",
      "template": "L6",
      "difficulty": 3,
      "stem": "For what value of $k$ does the system below have no solution?\n$2 x + 2 y = 3$\n$kx + 6y = 21$",
      "choices": [
        {
          "text": "2",
          "correct": false,
          "misconception": "equal-coefficients-not-proportional",
          "label": "A"
        },
        {
          "text": "12",
          "correct": false,
          "misconception": "multiplied-wrong-coefficients",
          "label": "B"
        },
        {
          "text": "\\frac{2}{3}",
          "correct": false,
          "misconception": "divided-instead-of-scaled",
          "label": "C"
        },
        {
          "text": "6",
          "correct": true,
          "misconception": null,
          "label": "D"
        }
      ],
      "answer": "D",
      "hints": [
        "What do the graphs of two equations look like when the system has no solution?",
        "Parallel lines have the same slope but different intercepts, so the coefficients must be proportional.",
        "The $y$ coefficient was multiplied by $3$. What must happen to the $x$ coefficient?"
      ],
      "solution": [
        "Parallel lines need $2/k = 2/6$, so $k = 6$",
        "Check: the constants $3\\cdot3 = 9 \\ne 21$, so the lines are distinct."
      ],
      "twins": [
        {
          "id": "P-S1-6-T1",
          "skill": "S1",
          "template": "L6",
          "difficulty": 3,
          "stem": "For what value of $k$ does the system below have no solution?\n$5 x + 3 y = 5$\n$kx + 6y = 3$",
          "choices": [
            {
              "text": "6",
              "correct": false,
              "misconception": "matched-y-coefficient-not-ratio",
              "label": "A"
            },
            {
              "text": "10",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "30",
              "correct": false,
              "misconception": "multiplied-wrong-coefficients",
              "label": "C"
            },
            {
              "text": "\\frac{5}{2}",
              "correct": false,
              "misconception": "divided-instead-of-scaled",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "What do the graphs of two equations look like when the system has no solution?",
            "Parallel lines have the same slope but different intercepts, so the coefficients must be proportional.",
            "The $y$ coefficient was multiplied by $2$. What must happen to the $x$ coefficient?"
          ],
          "solution": [
            "Parallel lines need $5/k = 3/6$, so $k = 10$",
            "Check: the constants $5\\cdot2 = 10 \\ne 3$, so the lines are distinct."
          ]
        },
        {
          "id": "P-S1-6-T2",
          "skill": "S1",
          "template": "L6",
          "difficulty": 3,
          "stem": "For what value of $k$ does the system below have no solution?\n$6 x + 5 y = 8$\n$kx + 20y = 2$",
          "choices": [
            {
              "text": "24",
              "correct": true,
              "misconception": null,
              "label": "A"
            },
            {
              "text": "\\frac{3}{2}",
              "correct": false,
              "misconception": "divided-instead-of-scaled",
              "label": "B"
            },
            {
              "text": "120",
              "correct": false,
              "misconception": "multiplied-wrong-coefficients",
              "label": "C"
            },
            {
              "text": "20",
              "correct": false,
              "misconception": "matched-y-coefficient-not-ratio",
              "label": "D"
            }
          ],
          "answer": "A",
          "hints": [
            "What do the graphs of two equations look like when the system has no solution?",
            "Parallel lines have the same slope but different intercepts, so the coefficients must be proportional.",
            "The $y$ coefficient was multiplied by $4$. What must happen to the $x$ coefficient?"
          ],
          "solution": [
            "Parallel lines need $6/k = 5/20$, so $k = 24$",
            "Check: the constants $8\\cdot4 = 32 \\ne 2$, so the lines are distinct."
          ]
        }
      ]
    },
    {
      "id": "P-S1-7",
      "skill": "S1",
      "template": "L4",
      "difficulty": 2,
      "stem": "A tutoring service charges a registration fee of \\$20 plus \\$25 per session. Which equation gives the total cost $T$, in dollars, for $s$ sessions?",
      "choices": [
        {
          "text": "T = 20 s + 25",
          "correct": false,
          "misconception": "swapped-rate-and-initial-value",
          "label": "A"
        },
        {
          "text": "T = 45 s",
          "correct": false,
          "misconception": "applied-fee-every-unit",
          "label": "B"
        },
        {
          "text": "T = 25 s + 20",
          "correct": true,
          "misconception": null,
          "label": "C"
        },
        {
          "text": "T = 25 s - 20",
          "correct": false,
          "misconception": "sign-of-initial-value",
          "label": "D"
        }
      ],
      "answer": "C",
      "hints": [
        "What would the cost be if zero units of time were used?",
        "In $y = mx + b$, the slope is the rate that repeats and $b$ is the one-time amount.",
        "The one-time amount is \\$20; the amount that is multiplied by $s$ is \\$25."
      ],
      "solution": [
        "Rate (slope) = 25; starting value (intercept) = 20",
        "$T = 25 s + 20$"
      ],
      "twins": [
        {
          "id": "P-S1-7-T1",
          "skill": "S1",
          "template": "L4",
          "difficulty": 2,
          "stem": "A plumber charges a flat fee of \\$35 plus \\$55 per hour. Which equation gives the total cost $C$, in dollars, for $h$ hours of work?",
          "choices": [
            {
              "text": "C = 35 h + 55",
              "correct": false,
              "misconception": "swapped-rate-and-initial-value",
              "label": "A"
            },
            {
              "text": "C = 55 h + 35",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "C = 55 h - 35",
              "correct": false,
              "misconception": "sign-of-initial-value",
              "label": "C"
            },
            {
              "text": "C = 90 h",
              "correct": false,
              "misconception": "applied-fee-every-unit",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "What would the cost be if zero units of time were used?",
            "In $y = mx + b$, the slope is the rate that repeats and $b$ is the one-time amount.",
            "The one-time amount is \\$35; the amount that is multiplied by $h$ is \\$55."
          ],
          "solution": [
            "Rate (slope) = 55; starting value (intercept) = 35",
            "$C = 55 h + 35$"
          ]
        },
        {
          "id": "P-S1-7-T2",
          "skill": "S1",
          "template": "L4",
          "difficulty": 2,
          "stem": "A tutoring service charges a registration fee of \\$60 plus \\$45 per session. Which equation gives the total cost $T$, in dollars, for $s$ sessions?",
          "choices": [
            {
              "text": "T = 105 s",
              "correct": false,
              "misconception": "applied-fee-every-unit",
              "label": "A"
            },
            {
              "text": "T = 45 s - 60",
              "correct": false,
              "misconception": "sign-of-initial-value",
              "label": "B"
            },
            {
              "text": "T = 60 s + 45",
              "correct": false,
              "misconception": "swapped-rate-and-initial-value",
              "label": "C"
            },
            {
              "text": "T = 45 s + 60",
              "correct": true,
              "misconception": null,
              "label": "D"
            }
          ],
          "answer": "D",
          "hints": [
            "What would the cost be if zero units of time were used?",
            "In $y = mx + b$, the slope is the rate that repeats and $b$ is the one-time amount.",
            "The one-time amount is \\$60; the amount that is multiplied by $s$ is \\$45."
          ],
          "solution": [
            "Rate (slope) = 45; starting value (intercept) = 60",
            "$T = 45 s + 60$"
          ]
        }
      ]
    },
    {
      "id": "P-S1-8",
      "skill": "S1",
      "template": "L6",
      "difficulty": 3,
      "stem": "For what value of $k$ does the system below have no solution?\n$3 x + 3 y = 9$\n$kx + 12y = 26$",
      "choices": [
        {
          "text": "36",
          "correct": false,
          "misconception": "multiplied-wrong-coefficients",
          "label": "A"
        },
        {
          "text": "3",
          "correct": false,
          "misconception": "equal-coefficients-not-proportional",
          "label": "B"
        },
        {
          "text": "12",
          "correct": true,
          "misconception": null,
          "label": "C"
        },
        {
          "text": "\\frac{3}{4}",
          "correct": false,
          "misconception": "divided-instead-of-scaled",
          "label": "D"
        }
      ],
      "answer": "C",
      "hints": [
        "What do the graphs of two equations look like when the system has no solution?",
        "Parallel lines have the same slope but different intercepts, so the coefficients must be proportional.",
        "The $y$ coefficient was multiplied by $4$. What must happen to the $x$ coefficient?"
      ],
      "solution": [
        "Parallel lines need $3/k = 3/12$, so $k = 12$",
        "Check: the constants $9\\cdot4 = 36 \\ne 26$, so the lines are distinct."
      ],
      "twins": [
        {
          "id": "P-S1-8-T1",
          "skill": "S1",
          "template": "L6",
          "difficulty": 3,
          "stem": "For what value of $k$ does the system below have no solution?\n$x + 4 y = 5$\n$kx + 8y = 20$",
          "choices": [
            {
              "text": "8",
              "correct": false,
              "misconception": "multiplied-wrong-coefficients",
              "label": "A"
            },
            {
              "text": "1",
              "correct": false,
              "misconception": "equal-coefficients-not-proportional",
              "label": "B"
            },
            {
              "text": "2",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "\\frac{1}{2}",
              "correct": false,
              "misconception": "divided-instead-of-scaled",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "What do the graphs of two equations look like when the system has no solution?",
            "Parallel lines have the same slope but different intercepts, so the coefficients must be proportional.",
            "The $y$ coefficient was multiplied by $2$. What must happen to the $x$ coefficient?"
          ],
          "solution": [
            "Parallel lines need $1/k = 4/8$, so $k = 2$",
            "Check: the constants $5\\cdot2 = 10 \\ne 20$, so the lines are distinct."
          ]
        },
        {
          "id": "P-S1-8-T2",
          "skill": "S1",
          "template": "L6",
          "difficulty": 3,
          "stem": "For what value of $k$ does the system below have no solution?\n$2 x + 6 y = 4$\n$kx + 12y = 16$",
          "choices": [
            {
              "text": "1",
              "correct": false,
              "misconception": "divided-instead-of-scaled",
              "label": "A"
            },
            {
              "text": "24",
              "correct": false,
              "misconception": "multiplied-wrong-coefficients",
              "label": "B"
            },
            {
              "text": "4",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "12",
              "correct": false,
              "misconception": "matched-y-coefficient-not-ratio",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "What do the graphs of two equations look like when the system has no solution?",
            "Parallel lines have the same slope but different intercepts, so the coefficients must be proportional.",
            "The $y$ coefficient was multiplied by $2$. What must happen to the $x$ coefficient?"
          ],
          "solution": [
            "Parallel lines need $2/k = 6/12$, so $k = 4$",
            "Check: the constants $4\\cdot2 = 8 \\ne 16$, so the lines are distinct."
          ]
        }
      ]
    },
    {
      "id": "P-S2-1",
      "skill": "S2",
      "template": "Q1",
      "difficulty": 1,
      "stem": "For $x \\ne 0$, which expression is equivalent to $\\dfrac{x^{4} \\cdot x^{2}}{x^{1}}$?",
      "choices": [
        {
          "text": "x^{5}",
          "correct": true,
          "misconception": null,
          "label": "A"
        },
        {
          "text": "x^{7}",
          "correct": false,
          "misconception": "multiplied-exponents-when-multiplying",
          "label": "B"
        },
        {
          "text": "x^{6}",
          "correct": false,
          "misconception": "arithmetic-slip",
          "label": "C"
        },
        {
          "text": "x^{8}",
          "correct": false,
          "misconception": "multiplied-then-divided-exponents",
          "label": "D"
        }
      ],
      "answer": "A",
      "hints": [
        "What happens to exponents when you multiply powers with the same base? When you divide?",
        "Multiplying the same base adds exponents; dividing subtracts them.",
        "The numerator is $x^{6}$."
      ],
      "solution": [
        "$x^{4}x^{2} = x^{6}$",
        "$x^{6}/x^{1} = x^{5}$"
      ],
      "twins": [
        {
          "id": "P-S2-1-T1",
          "skill": "S2",
          "template": "Q1",
          "difficulty": 1,
          "stem": "For $x \\ne 0$, which expression is equivalent to $\\dfrac{x^{3} \\cdot x^{4}}{x^{6}}$?",
          "choices": [
            {
              "text": "x^{13}",
              "correct": false,
              "misconception": "added-exponent-when-dividing",
              "label": "A"
            },
            {
              "text": "x^{6}",
              "correct": false,
              "misconception": "multiplied-exponents-when-multiplying",
              "label": "B"
            },
            {
              "text": "x^{2}",
              "correct": false,
              "misconception": "multiplied-then-divided-exponents",
              "label": "C"
            },
            {
              "text": "x^{1}",
              "correct": true,
              "misconception": null,
              "label": "D"
            }
          ],
          "answer": "D",
          "hints": [
            "What happens to exponents when you multiply powers with the same base? When you divide?",
            "Multiplying the same base adds exponents; dividing subtracts them.",
            "The numerator is $x^{7}$."
          ],
          "solution": [
            "$x^{3}x^{4} = x^{7}$",
            "$x^{7}/x^{6} = x^{1}$"
          ]
        },
        {
          "id": "P-S2-1-T2",
          "skill": "S2",
          "template": "Q1",
          "difficulty": 1,
          "stem": "For $x \\ne 0$, which expression is equivalent to $\\dfrac{x^{2} \\cdot x^{6}}{x^{5}}$?",
          "choices": [
            {
              "text": "x^{7}",
              "correct": false,
              "misconception": "multiplied-exponents-when-multiplying",
              "label": "A"
            },
            {
              "text": "x^{3}",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "x^{17}",
              "correct": false,
              "misconception": "multiplied-then-divided-exponents",
              "label": "C"
            },
            {
              "text": "x^{13}",
              "correct": false,
              "misconception": "added-exponent-when-dividing",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "What happens to exponents when you multiply powers with the same base? When you divide?",
            "Multiplying the same base adds exponents; dividing subtracts them.",
            "The numerator is $x^{8}$."
          ],
          "solution": [
            "$x^{2}x^{6} = x^{8}$",
            "$x^{8}/x^{5} = x^{3}$"
          ]
        }
      ]
    },
    {
      "id": "P-S2-2",
      "skill": "S2",
      "template": "Q2",
      "difficulty": 2,
      "stem": "What is the solution set of $x^{2} - 4 x + 3 = 0$?",
      "choices": [
        {
          "text": "\\{-3, -1\\}",
          "correct": false,
          "misconception": "used-factor-constants-as-roots",
          "label": "A"
        },
        {
          "text": "\\{-3, 1\\}",
          "correct": false,
          "misconception": "sign-error-one-root",
          "label": "B"
        },
        {
          "text": "\\{-1, 3\\}",
          "correct": false,
          "misconception": "sign-error-one-root",
          "label": "C"
        },
        {
          "text": "\\{1, 3\\}",
          "correct": true,
          "misconception": null,
          "label": "D"
        }
      ],
      "answer": "D",
      "hints": [
        "Can the left side be written as a product of two binomials?",
        "Look for two numbers that multiply to $3$ and add to $-4$.",
        "The factors are $(x - 1)(x - 3)$. What makes each factor zero?"
      ],
      "solution": [
        "$x^{2} - 4 x + 3 = (x - 1)(x - 3)$",
        "Each factor is zero when $x = 1$ or $x = 3$"
      ],
      "twins": [
        {
          "id": "P-S2-2-T1",
          "skill": "S2",
          "template": "Q2",
          "difficulty": 2,
          "stem": "What is the solution set of $x^{2} - 11 x + 30 = 0$?",
          "choices": [
            {
              "text": "\\{-6, 5\\}",
              "correct": false,
              "misconception": "sign-error-one-root",
              "label": "A"
            },
            {
              "text": "\\{5, 6\\}",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "\\{-6, -5\\}",
              "correct": false,
              "misconception": "used-factor-constants-as-roots",
              "label": "C"
            },
            {
              "text": "\\{-5, 6\\}",
              "correct": false,
              "misconception": "sign-error-one-root",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "Can the left side be written as a product of two binomials?",
            "Look for two numbers that multiply to $30$ and add to $-11$.",
            "The factors are $(x - 5)(x - 6)$. What makes each factor zero?"
          ],
          "solution": [
            "$x^{2} - 11 x + 30 = (x - 5)(x - 6)$",
            "Each factor is zero when $x = 5$ or $x = 6$"
          ]
        },
        {
          "id": "P-S2-2-T2",
          "skill": "S2",
          "template": "Q2",
          "difficulty": 2,
          "stem": "What is the solution set of $x^{2} - 6 x - 7 = 0$?",
          "choices": [
            {
              "text": "\\{-7, -1\\}",
              "correct": false,
              "misconception": "sign-error-one-root",
              "label": "A"
            },
            {
              "text": "\\{1, 7\\}",
              "correct": false,
              "misconception": "sign-error-one-root",
              "label": "B"
            },
            {
              "text": "\\{-7, 1\\}",
              "correct": false,
              "misconception": "used-factor-constants-as-roots",
              "label": "C"
            },
            {
              "text": "\\{-1, 7\\}",
              "correct": true,
              "misconception": null,
              "label": "D"
            }
          ],
          "answer": "D",
          "hints": [
            "Can the left side be written as a product of two binomials?",
            "Look for two numbers that multiply to $-7$ and add to $-6$.",
            "The factors are $(x - 7)(x + 1)$. What makes each factor zero?"
          ],
          "solution": [
            "$x^{2} - 6 x - 7 = (x - 7)(x + 1)$",
            "Each factor is zero when $x = 7$ or $x = -1$"
          ]
        }
      ]
    },
    {
      "id": "P-S2-3",
      "skill": "S2",
      "template": "Q3",
      "difficulty": 2,
      "stem": "Which of the following is equivalent to $(2 x - 5)^2$?",
      "choices": [
        {
          "text": "4 x^{2} - 20 x + 25",
          "correct": true,
          "misconception": null,
          "label": "A"
        },
        {
          "text": "2 x^{2} - 20 x + 25",
          "correct": false,
          "misconception": "coefficient-not-squared",
          "label": "B"
        },
        {
          "text": "4 x^{2} + 25",
          "correct": false,
          "misconception": "squared-each-term-separately",
          "label": "C"
        },
        {
          "text": "4 x^{2} - 10 x + 25",
          "correct": false,
          "misconception": "missing-factor-2-in-middle-term",
          "label": "D"
        }
      ],
      "answer": "A",
      "hints": [
        "Write the square as a product of two identical binomials.",
        "Use FOIL or the pattern $(a+b)^2 = a^2 + 2ab + b^2$.",
        "The middle term is $2 \\cdot (2 x) \\cdot (-5)$."
      ],
      "solution": [
        "$(2 x - 5)^2 = (2 x)^2 + 2(2 x)(-5) + (-5)^2$",
        "$= 4 x^{2} - 20 x + 25$"
      ],
      "twins": [
        {
          "id": "P-S2-3-T1",
          "skill": "S2",
          "template": "Q3",
          "difficulty": 2,
          "stem": "Which of the following is equivalent to $(x + 4)^2$?",
          "choices": [
            {
              "text": "x^{2} + 4 x + 16",
              "correct": false,
              "misconception": "missing-factor-2-in-middle-term",
              "label": "A"
            },
            {
              "text": "x^{2} + 8 x + 8",
              "correct": false,
              "misconception": "coefficient-not-squared",
              "label": "B"
            },
            {
              "text": "x^{2} + 16",
              "correct": false,
              "misconception": "squared-each-term-separately",
              "label": "C"
            },
            {
              "text": "x^{2} + 8 x + 16",
              "correct": true,
              "misconception": null,
              "label": "D"
            }
          ],
          "answer": "D",
          "hints": [
            "Write the square as a product of two identical binomials.",
            "Use FOIL or the pattern $(a+b)^2 = a^2 + 2ab + b^2$.",
            "The middle term is $2 \\cdot (x) \\cdot (4)$."
          ],
          "solution": [
            "$(x + 4)^2 = (x)^2 + 2(x)(4) + (4)^2$",
            "$= x^{2} + 8 x + 16$"
          ]
        },
        {
          "id": "P-S2-3-T2",
          "skill": "S2",
          "template": "Q3",
          "difficulty": 2,
          "stem": "Which of the following is equivalent to $(3 x + 9)^2$?",
          "choices": [
            {
              "text": "9 x^{2} + 27 x + 81",
              "correct": false,
              "misconception": "missing-factor-2-in-middle-term",
              "label": "A"
            },
            {
              "text": "9 x^{2} + 81",
              "correct": false,
              "misconception": "squared-each-term-separately",
              "label": "B"
            },
            {
              "text": "9 x^{2} + 54 x + 81",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "3 x^{2} + 54 x + 81",
              "correct": false,
              "misconception": "coefficient-not-squared",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "Write the square as a product of two identical binomials.",
            "Use FOIL or the pattern $(a+b)^2 = a^2 + 2ab + b^2$.",
            "The middle term is $2 \\cdot (3 x) \\cdot (9)$."
          ],
          "solution": [
            "$(3 x + 9)^2 = (3 x)^2 + 2(3 x)(9) + (9)^2$",
            "$= 9 x^{2} + 54 x + 81$"
          ]
        }
      ]
    },
    {
      "id": "P-S2-4",
      "skill": "S2",
      "template": "Q4",
      "difficulty": 2,
      "stem": "The number of subscribers to a channel is 2000 and increases by 8\\% each year. Which expression gives the amount after $t$ years?",
      "choices": [
        {
          "text": "2000(9)^t",
          "correct": false,
          "misconception": "percent-not-converted-to-decimal",
          "label": "A"
        },
        {
          "text": "2000 + 160t",
          "correct": false,
          "misconception": "linear-instead-of-exponential",
          "label": "B"
        },
        {
          "text": "2000(1.08)^t",
          "correct": true,
          "misconception": null,
          "label": "C"
        },
        {
          "text": "2000(0.08)^t",
          "correct": false,
          "misconception": "used-rate-not-growth-factor",
          "label": "D"
        }
      ],
      "answer": "C",
      "hints": [
        "After one year, is the amount the same fraction larger (or smaller) each time, or the same number of units?",
        "A 8% increase multiplies the amount by $1 + 0.08$ each year.",
        "The growth factor is $1.08$; it is applied $t$ times."
      ],
      "solution": [
        "Growth factor $= 1 + 0.08 = 1.08$",
        "Amount after $t$ years $= 2000(1.08)^t$"
      ],
      "twins": [
        {
          "id": "P-S2-4-T1",
          "skill": "S2",
          "template": "Q4",
          "difficulty": 2,
          "stem": "The number of subscribers to a channel is 2000 and increases by 3\\% each year. Which expression gives the amount after $t$ years?",
          "choices": [
            {
              "text": "2000(1.03)^t",
              "correct": true,
              "misconception": null,
              "label": "A"
            },
            {
              "text": "2000(4)^t",
              "correct": false,
              "misconception": "percent-not-converted-to-decimal",
              "label": "B"
            },
            {
              "text": "2000(0.03)^t",
              "correct": false,
              "misconception": "used-rate-not-growth-factor",
              "label": "C"
            },
            {
              "text": "2000 + 60t",
              "correct": false,
              "misconception": "linear-instead-of-exponential",
              "label": "D"
            }
          ],
          "answer": "A",
          "hints": [
            "After one year, is the amount the same fraction larger (or smaller) each time, or the same number of units?",
            "A 3% increase multiplies the amount by $1 + 0.03$ each year.",
            "The growth factor is $1.03$; it is applied $t$ times."
          ],
          "solution": [
            "Growth factor $= 1 + 0.03 = 1.03$",
            "Amount after $t$ years $= 2000(1.03)^t$"
          ]
        },
        {
          "id": "P-S2-4-T2",
          "skill": "S2",
          "template": "Q4",
          "difficulty": 2,
          "stem": "The value of an investment is 2500 and decreases by 6\\% each year. Which expression gives the amount after $t$ years?",
          "choices": [
            {
              "text": "2500(0.06)^t",
              "correct": false,
              "misconception": "used-rate-not-growth-factor",
              "label": "A"
            },
            {
              "text": "2500 - 150t",
              "correct": false,
              "misconception": "linear-instead-of-exponential",
              "label": "B"
            },
            {
              "text": "2500(1.06)^t",
              "correct": false,
              "misconception": "used-growth-factor-for-decay",
              "label": "C"
            },
            {
              "text": "2500(0.94)^t",
              "correct": true,
              "misconception": null,
              "label": "D"
            }
          ],
          "answer": "D",
          "hints": [
            "After one year, is the amount the same fraction larger (or smaller) each time, or the same number of units?",
            "A 6% decrease multiplies the amount by $1 - 0.06$ each year.",
            "The growth factor is $0.94$; it is applied $t$ times."
          ],
          "solution": [
            "Growth factor $= 1 - 0.06 = 0.94$",
            "Amount after $t$ years $= 2500(0.94)^t$"
          ]
        }
      ]
    },
    {
      "id": "P-S2-5",
      "skill": "S2",
      "template": "Q5",
      "difficulty": 3,
      "stem": "What is the minimum value of the function $f(x) = x^{2} + 12 x + 8$?",
      "choices": [
        {
          "text": "8",
          "correct": false,
          "misconception": "reported-y-intercept",
          "label": "A"
        },
        {
          "text": "44",
          "correct": false,
          "misconception": "sign-error-completing-square",
          "label": "B"
        },
        {
          "text": "-28",
          "correct": true,
          "misconception": null,
          "label": "C"
        },
        {
          "text": "-6",
          "correct": false,
          "misconception": "reported-x-of-vertex",
          "label": "D"
        }
      ],
      "answer": "C",
      "hints": [
        "Where does an upward-opening parabola reach its lowest point?",
        "The vertex is at $x = -\\dfrac{b}{2a}$; the minimum value is $f$ evaluated there.",
        "The vertex is at $x = -6$. Now find $f(-6)$."
      ],
      "solution": [
        "$x = -\\dfrac{12}{2} = -6$",
        "$f(-6) = 36 - 72 + 8 = -28$"
      ],
      "twins": [
        {
          "id": "P-S2-5-T1",
          "skill": "S2",
          "template": "Q5",
          "difficulty": 3,
          "stem": "What is the minimum value of the function $f(x) = x^{2} - 10 x + 26$?",
          "choices": [
            {
              "text": "1",
              "correct": true,
              "misconception": null,
              "label": "A"
            },
            {
              "text": "5",
              "correct": false,
              "misconception": "reported-x-of-vertex",
              "label": "B"
            },
            {
              "text": "51",
              "correct": false,
              "misconception": "sign-error-completing-square",
              "label": "C"
            },
            {
              "text": "26",
              "correct": false,
              "misconception": "reported-y-intercept",
              "label": "D"
            }
          ],
          "answer": "A",
          "hints": [
            "Where does an upward-opening parabola reach its lowest point?",
            "The vertex is at $x = -\\dfrac{b}{2a}$; the minimum value is $f$ evaluated there.",
            "The vertex is at $x = 5$. Now find $f(5)$."
          ],
          "solution": [
            "$x = -\\dfrac{-10}{2} = 5$",
            "$f(5) = 25 - 50 + 26 = 1$"
          ]
        },
        {
          "id": "P-S2-5-T2",
          "skill": "S2",
          "template": "Q5",
          "difficulty": 3,
          "stem": "What is the minimum value of the function $f(x) = x^{2} - 8 x + 1$?",
          "choices": [
            {
              "text": "-15",
              "correct": true,
              "misconception": null,
              "label": "A"
            },
            {
              "text": "4",
              "correct": false,
              "misconception": "reported-x-of-vertex",
              "label": "B"
            },
            {
              "text": "17",
              "correct": false,
              "misconception": "sign-error-completing-square",
              "label": "C"
            },
            {
              "text": "1",
              "correct": false,
              "misconception": "reported-y-intercept",
              "label": "D"
            }
          ],
          "answer": "A",
          "hints": [
            "Where does an upward-opening parabola reach its lowest point?",
            "The vertex is at $x = -\\dfrac{b}{2a}$; the minimum value is $f$ evaluated there.",
            "The vertex is at $x = 4$. Now find $f(4)$."
          ],
          "solution": [
            "$x = -\\dfrac{-8}{2} = 4$",
            "$f(4) = 16 - 32 + 1 = -15$"
          ]
        }
      ]
    },
    {
      "id": "P-S2-6",
      "skill": "S2",
      "template": "Q6",
      "difficulty": 3,
      "stem": "For what value of $c$ does $x^2 + 14x + c = 0$ have exactly one real solution?",
      "choices": [
        {
          "text": "98",
          "correct": false,
          "misconception": "discriminant-factor-error",
          "label": "A"
        },
        {
          "text": "49",
          "correct": true,
          "misconception": null,
          "label": "B"
        },
        {
          "text": "196",
          "correct": false,
          "misconception": "forgot-4ac-factor",
          "label": "C"
        },
        {
          "text": "7",
          "correct": false,
          "misconception": "halved-b-but-did-not-square",
          "label": "D"
        }
      ],
      "answer": "B",
      "hints": [
        "How many real solutions does a quadratic have when its discriminant is zero?",
        "Set $b^2 - 4ac = 0$ and solve for $c$.",
        "Here $a = 1$ and $b = 14$, so $196 - 4c = 0$."
      ],
      "solution": [
        "$b^2 - 4ac = 196 - 4c = 0$",
        "$c = 49$"
      ],
      "twins": [
        {
          "id": "P-S2-6-T1",
          "skill": "S2",
          "template": "Q6",
          "difficulty": 3,
          "stem": "For what value of $c$ does $x^2 + 6x + c = 0$ have exactly one real solution?",
          "choices": [
            {
              "text": "18",
              "correct": false,
              "misconception": "discriminant-factor-error",
              "label": "A"
            },
            {
              "text": "36",
              "correct": false,
              "misconception": "forgot-4ac-factor",
              "label": "B"
            },
            {
              "text": "3",
              "correct": false,
              "misconception": "halved-b-but-did-not-square",
              "label": "C"
            },
            {
              "text": "9",
              "correct": true,
              "misconception": null,
              "label": "D"
            }
          ],
          "answer": "D",
          "hints": [
            "How many real solutions does a quadratic have when its discriminant is zero?",
            "Set $b^2 - 4ac = 0$ and solve for $c$.",
            "Here $a = 1$ and $b = 6$, so $36 - 4c = 0$."
          ],
          "solution": [
            "$b^2 - 4ac = 36 - 4c = 0$",
            "$c = 9$"
          ]
        },
        {
          "id": "P-S2-6-T2",
          "skill": "S2",
          "template": "Q6",
          "difficulty": 3,
          "stem": "For what value of $c$ does $x^2 - 6x + c = 0$ have exactly one real solution?",
          "choices": [
            {
              "text": "36",
              "correct": false,
              "misconception": "forgot-4ac-factor",
              "label": "A"
            },
            {
              "text": "-3",
              "correct": false,
              "misconception": "halved-b-but-did-not-square",
              "label": "B"
            },
            {
              "text": "9",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "18",
              "correct": false,
              "misconception": "discriminant-factor-error",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "How many real solutions does a quadratic have when its discriminant is zero?",
            "Set $b^2 - 4ac = 0$ and solve for $c$.",
            "Here $a = 1$ and $b = -6$, so $36 - 4c = 0$."
          ],
          "solution": [
            "$b^2 - 4ac = 36 - 4c = 0$",
            "$c = 9$"
          ]
        }
      ]
    },
    {
      "id": "P-S2-7",
      "skill": "S2",
      "template": "Q4",
      "difficulty": 2,
      "stem": "The population of a town is 800 and increases by 5\\% each year. Which expression gives the amount after $t$ years?",
      "choices": [
        {
          "text": "800 + 40t",
          "correct": false,
          "misconception": "linear-instead-of-exponential",
          "label": "A"
        },
        {
          "text": "800(0.05)^t",
          "correct": false,
          "misconception": "used-rate-not-growth-factor",
          "label": "B"
        },
        {
          "text": "800(6)^t",
          "correct": false,
          "misconception": "percent-not-converted-to-decimal",
          "label": "C"
        },
        {
          "text": "800(1.05)^t",
          "correct": true,
          "misconception": null,
          "label": "D"
        }
      ],
      "answer": "D",
      "hints": [
        "After one year, is the amount the same fraction larger (or smaller) each time, or the same number of units?",
        "A 5% increase multiplies the amount by $1 + 0.05$ each year.",
        "The growth factor is $1.05$; it is applied $t$ times."
      ],
      "solution": [
        "Growth factor $= 1 + 0.05 = 1.05$",
        "Amount after $t$ years $= 800(1.05)^t$"
      ],
      "twins": [
        {
          "id": "P-S2-7-T1",
          "skill": "S2",
          "template": "Q4",
          "difficulty": 2,
          "stem": "The value of an investment is 800 and increases by 8\\% each year. Which expression gives the amount after $t$ years?",
          "choices": [
            {
              "text": "800 + 64t",
              "correct": false,
              "misconception": "linear-instead-of-exponential",
              "label": "A"
            },
            {
              "text": "800(1.08)^t",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "800(9)^t",
              "correct": false,
              "misconception": "percent-not-converted-to-decimal",
              "label": "C"
            },
            {
              "text": "800(0.08)^t",
              "correct": false,
              "misconception": "used-rate-not-growth-factor",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "After one year, is the amount the same fraction larger (or smaller) each time, or the same number of units?",
            "A 8% increase multiplies the amount by $1 + 0.08$ each year.",
            "The growth factor is $1.08$; it is applied $t$ times."
          ],
          "solution": [
            "Growth factor $= 1 + 0.08 = 1.08$",
            "Amount after $t$ years $= 800(1.08)^t$"
          ]
        },
        {
          "id": "P-S2-7-T2",
          "skill": "S2",
          "template": "Q4",
          "difficulty": 2,
          "stem": "The value of an investment is 800 and decreases by 4\\% each year. Which expression gives the amount after $t$ years?",
          "choices": [
            {
              "text": "800(1.04)^t",
              "correct": false,
              "misconception": "used-growth-factor-for-decay",
              "label": "A"
            },
            {
              "text": "800(0.04)^t",
              "correct": false,
              "misconception": "used-rate-not-growth-factor",
              "label": "B"
            },
            {
              "text": "800(0.96)^t",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "800 - 32t",
              "correct": false,
              "misconception": "linear-instead-of-exponential",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "After one year, is the amount the same fraction larger (or smaller) each time, or the same number of units?",
            "A 4% decrease multiplies the amount by $1 - 0.04$ each year.",
            "The growth factor is $0.96$; it is applied $t$ times."
          ],
          "solution": [
            "Growth factor $= 1 - 0.04 = 0.96$",
            "Amount after $t$ years $= 800(0.96)^t$"
          ]
        }
      ]
    },
    {
      "id": "P-S2-8",
      "skill": "S2",
      "template": "Q6",
      "difficulty": 3,
      "stem": "For what value of $c$ does $x^2 - 8x + c = 0$ have exactly one real solution?",
      "choices": [
        {
          "text": "32",
          "correct": false,
          "misconception": "discriminant-factor-error",
          "label": "A"
        },
        {
          "text": "-4",
          "correct": false,
          "misconception": "halved-b-but-did-not-square",
          "label": "B"
        },
        {
          "text": "64",
          "correct": false,
          "misconception": "forgot-4ac-factor",
          "label": "C"
        },
        {
          "text": "16",
          "correct": true,
          "misconception": null,
          "label": "D"
        }
      ],
      "answer": "D",
      "hints": [
        "How many real solutions does a quadratic have when its discriminant is zero?",
        "Set $b^2 - 4ac = 0$ and solve for $c$.",
        "Here $a = 1$ and $b = -8$, so $64 - 4c = 0$."
      ],
      "solution": [
        "$b^2 - 4ac = 64 - 4c = 0$",
        "$c = 16$"
      ],
      "twins": [
        {
          "id": "P-S2-8-T1",
          "skill": "S2",
          "template": "Q6",
          "difficulty": 3,
          "stem": "For what value of $c$ does $x^2 - 12x + c = 0$ have exactly one real solution?",
          "choices": [
            {
              "text": "144",
              "correct": false,
              "misconception": "forgot-4ac-factor",
              "label": "A"
            },
            {
              "text": "-6",
              "correct": false,
              "misconception": "halved-b-but-did-not-square",
              "label": "B"
            },
            {
              "text": "36",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "72",
              "correct": false,
              "misconception": "discriminant-factor-error",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "How many real solutions does a quadratic have when its discriminant is zero?",
            "Set $b^2 - 4ac = 0$ and solve for $c$.",
            "Here $a = 1$ and $b = -12$, so $144 - 4c = 0$."
          ],
          "solution": [
            "$b^2 - 4ac = 144 - 4c = 0$",
            "$c = 36$"
          ]
        },
        {
          "id": "P-S2-8-T2",
          "skill": "S2",
          "template": "Q6",
          "difficulty": 3,
          "stem": "For what value of $c$ does $x^2 + 2x + c = 0$ have exactly one real solution?",
          "choices": [
            {
              "text": "1",
              "correct": true,
              "misconception": null,
              "label": "A"
            },
            {
              "text": "-1",
              "correct": false,
              "misconception": "sign-error-discriminant",
              "label": "B"
            },
            {
              "text": "2",
              "correct": false,
              "misconception": "discriminant-factor-error",
              "label": "C"
            },
            {
              "text": "4",
              "correct": false,
              "misconception": "forgot-4ac-factor",
              "label": "D"
            }
          ],
          "answer": "A",
          "hints": [
            "How many real solutions does a quadratic have when its discriminant is zero?",
            "Set $b^2 - 4ac = 0$ and solve for $c$.",
            "Here $a = 1$ and $b = 2$, so $4 - 4c = 0$."
          ],
          "solution": [
            "$b^2 - 4ac = 4 - 4c = 0$",
            "$c = 1$"
          ]
        }
      ]
    },
    {
      "id": "P-S3-1",
      "skill": "S3",
      "template": "F1",
      "difficulty": 1,
      "stem": "If $f(x) = 4 x^{2} - 6 x - 6$, what is $f(-2)$?",
      "choices": [
        {
          "text": "22",
          "correct": true,
          "misconception": null,
          "label": "A"
        },
        {
          "text": "-2",
          "correct": false,
          "misconception": "sign-error-linear-term",
          "label": "B"
        },
        {
          "text": "28",
          "correct": false,
          "misconception": "dropped-constant-term",
          "label": "C"
        },
        {
          "text": "-10",
          "correct": false,
          "misconception": "negative-squared-sign-error",
          "label": "D"
        }
      ],
      "answer": "A",
      "hints": [
        "What does $f(-2)$ mean you should do with the number in parentheses?",
        "Replace every $x$ with the input, using parentheses around negative numbers.",
        "$(-2)^2 = 4$, so the first term is $4\\cdot4$."
      ],
      "solution": [
        "$f(-2) = 4(-2)^2 - 6(-2) - 6$",
        "$= 22$"
      ],
      "twins": [
        {
          "id": "P-S3-1-T1",
          "skill": "S3",
          "template": "F1",
          "difficulty": 1,
          "stem": "If $f(x) = 4 x^{2} + 8 x - 8$, what is $f(-1)$?",
          "choices": [
            {
              "text": "-20",
              "correct": false,
              "misconception": "negative-squared-sign-error",
              "label": "A"
            },
            {
              "text": "-4",
              "correct": false,
              "misconception": "dropped-constant-term",
              "label": "B"
            },
            {
              "text": "-12",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "4",
              "correct": false,
              "misconception": "sign-error-linear-term",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "What does $f(-1)$ mean you should do with the number in parentheses?",
            "Replace every $x$ with the input, using parentheses around negative numbers.",
            "$(-1)^2 = 1$, so the first term is $4\\cdot1$."
          ],
          "solution": [
            "$f(-1) = 4(-1)^2 + 8(-1) - 8$",
            "$= -12$"
          ]
        },
        {
          "id": "P-S3-1-T2",
          "skill": "S3",
          "template": "F1",
          "difficulty": 1,
          "stem": "If $f(x) = 5 x^{2} + 7 x - 1$, what is $f(-3)$?",
          "choices": [
            {
              "text": "65",
              "correct": false,
              "misconception": "sign-error-linear-term",
              "label": "A"
            },
            {
              "text": "23",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "24",
              "correct": false,
              "misconception": "dropped-constant-term",
              "label": "C"
            },
            {
              "text": "-67",
              "correct": false,
              "misconception": "negative-squared-sign-error",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "What does $f(-3)$ mean you should do with the number in parentheses?",
            "Replace every $x$ with the input, using parentheses around negative numbers.",
            "$(-3)^2 = 9$, so the first term is $5\\cdot9$."
          ],
          "solution": [
            "$f(-3) = 5(-3)^2 + 7(-3) - 1$",
            "$= 23$"
          ]
        }
      ]
    },
    {
      "id": "P-S3-2",
      "skill": "S3",
      "template": "F2",
      "difficulty": 2,
      "stem": "If $f(x) = - 4 x - 1$ and $g(x) = x^{2} - 2$, what is $f(g(3))$?",
      "choices": [
        {
          "text": "-91",
          "correct": false,
          "misconception": "multiplied-instead-of-composed",
          "label": "A"
        },
        {
          "text": "-6",
          "correct": false,
          "misconception": "added-instead-of-composed",
          "label": "B"
        },
        {
          "text": "167",
          "correct": false,
          "misconception": "composed-in-wrong-order",
          "label": "C"
        },
        {
          "text": "-29",
          "correct": true,
          "misconception": null,
          "label": "D"
        }
      ],
      "answer": "D",
      "hints": [
        "Which function do you evaluate first in $f(g(x))$?",
        "Work from the inside out: find $g$ of the number, then use that output as the input to $f$.",
        "$g(3) = 7$. Now find $f(7)$."
      ],
      "solution": [
        "$g(3) = 7$",
        "$f(7) = -29$"
      ],
      "twins": [
        {
          "id": "P-S3-2-T1",
          "skill": "S3",
          "template": "F2",
          "difficulty": 2,
          "stem": "If $f(x) = 3 x - 1$ and $g(x) = x^{2} - 2$, what is $f(g(1))$?",
          "choices": [
            {
              "text": "-4",
              "correct": true,
              "misconception": null,
              "label": "A"
            },
            {
              "text": "1",
              "correct": false,
              "misconception": "added-instead-of-composed",
              "label": "B"
            },
            {
              "text": "2",
              "correct": false,
              "misconception": "composed-in-wrong-order",
              "label": "C"
            },
            {
              "text": "-2",
              "correct": false,
              "misconception": "multiplied-instead-of-composed",
              "label": "D"
            }
          ],
          "answer": "A",
          "hints": [
            "Which function do you evaluate first in $f(g(x))$?",
            "Work from the inside out: find $g$ of the number, then use that output as the input to $f$.",
            "$g(1) = -1$. Now find $f(-1)$."
          ],
          "solution": [
            "$g(1) = -1$",
            "$f(-1) = -4$"
          ]
        },
        {
          "id": "P-S3-2-T2",
          "skill": "S3",
          "template": "F2",
          "difficulty": 2,
          "stem": "If $f(x) = 4 x - 4$ and $g(x) = x^{2} - 6$, what is $f(g(2))$?",
          "choices": [
            {
              "text": "-12",
              "correct": true,
              "misconception": null,
              "label": "A"
            },
            {
              "text": "2",
              "correct": false,
              "misconception": "added-instead-of-composed",
              "label": "B"
            },
            {
              "text": "10",
              "correct": false,
              "misconception": "composed-in-wrong-order",
              "label": "C"
            },
            {
              "text": "-8",
              "correct": false,
              "misconception": "multiplied-instead-of-composed",
              "label": "D"
            }
          ],
          "answer": "A",
          "hints": [
            "Which function do you evaluate first in $f(g(x))$?",
            "Work from the inside out: find $g$ of the number, then use that output as the input to $f$.",
            "$g(2) = -2$. Now find $f(-2)$."
          ],
          "solution": [
            "$g(2) = -2$",
            "$f(-2) = -12$"
          ]
        }
      ]
    },
    {
      "id": "P-S3-3",
      "skill": "S3",
      "template": "F3",
      "difficulty": 2,
      "stem": "What is the domain of $f(x) = \\sqrt{2 x - 16}$?",
      "choices": [
        {
          "text": "x \\ge 8",
          "correct": true,
          "misconception": null,
          "label": "A"
        },
        {
          "text": "x \\ge -8",
          "correct": false,
          "misconception": "sign-error-solving-for-x",
          "label": "B"
        },
        {
          "text": "\\text{all real numbers}",
          "correct": false,
          "misconception": "ignored-square-root-restriction",
          "label": "C"
        },
        {
          "text": "x > 8",
          "correct": false,
          "misconception": "excluded-zero-under-radical",
          "label": "D"
        }
      ],
      "answer": "A",
      "hints": [
        "What kinds of numbers can you take the square root of and get a real result?",
        "Set the expression under the radical greater than or equal to zero and solve.",
        "Solve $2 x - 16 \\ge 0$."
      ],
      "solution": [
        "$2 x - 16 \\ge 0$",
        "$x \\ge 8$"
      ],
      "twins": [
        {
          "id": "P-S3-3-T1",
          "skill": "S3",
          "template": "F3",
          "difficulty": 2,
          "stem": "What is the domain of $f(x) = \\sqrt{3 x - 24}$?",
          "choices": [
            {
              "text": "x \\ge -8",
              "correct": false,
              "misconception": "sign-error-solving-for-x",
              "label": "A"
            },
            {
              "text": "x > 8",
              "correct": false,
              "misconception": "excluded-zero-under-radical",
              "label": "B"
            },
            {
              "text": "x \\ge 8",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "\\text{all real numbers}",
              "correct": false,
              "misconception": "ignored-square-root-restriction",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "What kinds of numbers can you take the square root of and get a real result?",
            "Set the expression under the radical greater than or equal to zero and solve.",
            "Solve $3 x - 24 \\ge 0$."
          ],
          "solution": [
            "$3 x - 24 \\ge 0$",
            "$x \\ge 8$"
          ]
        },
        {
          "id": "P-S3-3-T2",
          "skill": "S3",
          "template": "F3",
          "difficulty": 2,
          "stem": "What is the domain of $f(x) = \\sqrt{2 x - 18}$?",
          "choices": [
            {
              "text": "x \\ge 9",
              "correct": true,
              "misconception": null,
              "label": "A"
            },
            {
              "text": "x \\ge -9",
              "correct": false,
              "misconception": "sign-error-solving-for-x",
              "label": "B"
            },
            {
              "text": "x > 9",
              "correct": false,
              "misconception": "excluded-zero-under-radical",
              "label": "C"
            },
            {
              "text": "\\text{all real numbers}",
              "correct": false,
              "misconception": "ignored-square-root-restriction",
              "label": "D"
            }
          ],
          "answer": "A",
          "hints": [
            "What kinds of numbers can you take the square root of and get a real result?",
            "Set the expression under the radical greater than or equal to zero and solve.",
            "Solve $2 x - 18 \\ge 0$."
          ],
          "solution": [
            "$2 x - 18 \\ge 0$",
            "$x \\ge 9$"
          ]
        }
      ]
    },
    {
      "id": "P-S3-4",
      "skill": "S3",
      "template": "F4",
      "difficulty": 2,
      "stem": "The table shows values of a linear function $f$. What is $f(20)$?\n$\\begin{array}{c|c} x & f(x) \\\\ \\hline 0 & 6 \\\\ 1 & 8 \\\\ 2 & 10 \\\\ 3 & 12 \\end{array}$",
      "choices": [
        {
          "text": "44",
          "correct": false,
          "misconception": "off-by-one-counting-steps",
          "label": "A"
        },
        {
          "text": "46",
          "correct": true,
          "misconception": null,
          "label": "B"
        },
        {
          "text": "40",
          "correct": false,
          "misconception": "ignored-intercept",
          "label": "C"
        },
        {
          "text": "80",
          "correct": false,
          "misconception": "assumed-proportional",
          "label": "D"
        }
      ],
      "answer": "B",
      "hints": [
        "By how much does $f(x)$ change each time $x$ goes up by 1?",
        "A linear function is $f(x) = mx + b$, where $m$ is the constant change and $b = f(0)$.",
        "Here $m = 2$ and $b = 6$."
      ],
      "solution": [
        "$f(x) = 2 x + 6$",
        "$f(20) = 46$"
      ],
      "twins": [
        {
          "id": "P-S3-4-T1",
          "skill": "S3",
          "template": "F4",
          "difficulty": 2,
          "stem": "The table shows values of a linear function $f$. What is $f(12)$?\n$\\begin{array}{c|c} x & f(x) \\\\ \\hline 0 & -10 \\\\ 1 & -6 \\\\ 2 & -2 \\\\ 3 & 2 \\end{array}$",
          "choices": [
            {
              "text": "48",
              "correct": false,
              "misconception": "ignored-intercept",
              "label": "A"
            },
            {
              "text": "34",
              "correct": false,
              "misconception": "off-by-one-counting-steps",
              "label": "B"
            },
            {
              "text": "8",
              "correct": false,
              "misconception": "assumed-proportional",
              "label": "C"
            },
            {
              "text": "38",
              "correct": true,
              "misconception": null,
              "label": "D"
            }
          ],
          "answer": "D",
          "hints": [
            "By how much does $f(x)$ change each time $x$ goes up by 1?",
            "A linear function is $f(x) = mx + b$, where $m$ is the constant change and $b = f(0)$.",
            "Here $m = 4$ and $b = -10$."
          ],
          "solution": [
            "$f(x) = 4 x - 10$",
            "$f(12) = 38$"
          ]
        },
        {
          "id": "P-S3-4-T2",
          "skill": "S3",
          "template": "F4",
          "difficulty": 2,
          "stem": "The table shows values of a linear function $f$. What is $f(12)$?\n$\\begin{array}{c|c} x & f(x) \\\\ \\hline 0 & -10 \\\\ 1 & -11 \\\\ 2 & -12 \\\\ 3 & -13 \\end{array}$",
          "choices": [
            {
              "text": "-22",
              "correct": true,
              "misconception": null,
              "label": "A"
            },
            {
              "text": "-12",
              "correct": false,
              "misconception": "ignored-intercept",
              "label": "B"
            },
            {
              "text": "-21",
              "correct": false,
              "misconception": "off-by-one-counting-steps",
              "label": "C"
            },
            {
              "text": "-52",
              "correct": false,
              "misconception": "assumed-proportional",
              "label": "D"
            }
          ],
          "answer": "A",
          "hints": [
            "By how much does $f(x)$ change each time $x$ goes up by 1?",
            "A linear function is $f(x) = mx + b$, where $m$ is the constant change and $b = f(0)$.",
            "Here $m = -1$ and $b = -10$."
          ],
          "solution": [
            "$f(x) = - x - 10$",
            "$f(12) = -22$"
          ]
        }
      ]
    },
    {
      "id": "P-S3-5",
      "skill": "S3",
      "template": "F5",
      "difficulty": 3,
      "stem": "If $f(x) = 5 x - 6$, what is $f^{-1}(9)$?",
      "choices": [
        {
          "text": "\\frac{1}{9}",
          "correct": false,
          "misconception": "inverse-as-reciprocal",
          "label": "A"
        },
        {
          "text": "\\frac{3}{5}",
          "correct": false,
          "misconception": "sign-error-undoing-addition",
          "label": "B"
        },
        {
          "text": "39",
          "correct": false,
          "misconception": "evaluated-f-not-inverse",
          "label": "C"
        },
        {
          "text": "3",
          "correct": true,
          "misconception": null,
          "label": "D"
        }
      ],
      "answer": "D",
      "hints": [
        "$f^{-1}(9)$ asks: what input to $f$ gives an output of $9$?",
        "Set $f(x) = 9$ and solve for $x$.",
        "Solve $5 x - 6 = 9$."
      ],
      "solution": [
        "$5 x - 6 = 9$",
        "$5x = 15$, so $x = 3$"
      ],
      "twins": [
        {
          "id": "P-S3-5-T1",
          "skill": "S3",
          "template": "F5",
          "difficulty": 3,
          "stem": "If $f(x) = 6 - 6 x$, what is $f^{-1}(12)$?",
          "choices": [
            {
              "text": "-1",
              "correct": true,
              "misconception": null,
              "label": "A"
            },
            {
              "text": "-66",
              "correct": false,
              "misconception": "evaluated-f-not-inverse",
              "label": "B"
            },
            {
              "text": "\\frac{1}{12}",
              "correct": false,
              "misconception": "inverse-as-reciprocal",
              "label": "C"
            },
            {
              "text": "-3",
              "correct": false,
              "misconception": "sign-error-undoing-addition",
              "label": "D"
            }
          ],
          "answer": "A",
          "hints": [
            "$f^{-1}(12)$ asks: what input to $f$ gives an output of $12$?",
            "Set $f(x) = 12$ and solve for $x$.",
            "Solve $6 - 6 x = 12$."
          ],
          "solution": [
            "$6 - 6 x = 12$",
            "$-6x = 6$, so $x = -1$"
          ]
        },
        {
          "id": "P-S3-5-T2",
          "skill": "S3",
          "template": "F5",
          "difficulty": 3,
          "stem": "If $f(x) = 6 x - 8$, what is $f^{-1}(16)$?",
          "choices": [
            {
              "text": "\\frac{1}{16}",
              "correct": false,
              "misconception": "inverse-as-reciprocal",
              "label": "A"
            },
            {
              "text": "88",
              "correct": false,
              "misconception": "evaluated-f-not-inverse",
              "label": "B"
            },
            {
              "text": "\\frac{4}{3}",
              "correct": false,
              "misconception": "sign-error-undoing-addition",
              "label": "C"
            },
            {
              "text": "4",
              "correct": true,
              "misconception": null,
              "label": "D"
            }
          ],
          "answer": "D",
          "hints": [
            "$f^{-1}(16)$ asks: what input to $f$ gives an output of $16$?",
            "Set $f(x) = 16$ and solve for $x$.",
            "Solve $6 x - 8 = 16$."
          ],
          "solution": [
            "$6 x - 8 = 16$",
            "$6x = 24$, so $x = 4$"
          ]
        }
      ]
    },
    {
      "id": "P-S3-6",
      "skill": "S3",
      "template": "F6",
      "difficulty": 3,
      "stem": "If $f(x) = x^{2} + 6 x$, which expression is equivalent to $f(x + 3)$?",
      "choices": [
        {
          "text": "x^{2} + 12 x + 27",
          "correct": true,
          "misconception": null,
          "label": "A"
        },
        {
          "text": "x^{2} + 6 x + 18",
          "correct": false,
          "misconception": "substituted-only-in-linear-term",
          "label": "B"
        },
        {
          "text": "x^{2} + 6 x + 27",
          "correct": false,
          "misconception": "squared-binomial-without-middle-term",
          "label": "C"
        },
        {
          "text": "x^{2} + 6 x + 3",
          "correct": false,
          "misconception": "added-h-to-output",
          "label": "D"
        }
      ],
      "answer": "A",
      "hints": [
        "What does it mean to evaluate a function at an expression instead of a number?",
        "Replace every $x$ in $f$ with $(x + 3)$, then expand.",
        "$f(x + 3) = (x + 3)^2 + 6(x + 3)$."
      ],
      "solution": [
        "$(x + 3)^2 = x^{2} + 6 x + 9$",
        "Total: $x^{2} + 12 x + 27$"
      ],
      "twins": [
        {
          "id": "P-S3-6-T1",
          "skill": "S3",
          "template": "F6",
          "difficulty": 3,
          "stem": "If $f(x) = x^{2} + 3 x$, which expression is equivalent to $f(x - 2)$?",
          "choices": [
            {
              "text": "x^{2} + 3 x - 6",
              "correct": false,
              "misconception": "substituted-only-in-linear-term",
              "label": "A"
            },
            {
              "text": "x^{2} + 3 x - 2",
              "correct": false,
              "misconception": "added-h-to-output",
              "label": "B"
            },
            {
              "text": "x^{2} - x - 2",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "x^{2} + x - 2",
              "correct": false,
              "misconception": "middle-term-coefficient-error",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "What does it mean to evaluate a function at an expression instead of a number?",
            "Replace every $x$ in $f$ with $(x - 2)$, then expand.",
            "$f(x - 2) = (x - 2)^2 + 3(x - 2)$."
          ],
          "solution": [
            "$(x - 2)^2 = x^{2} - 4 x + 4$",
            "Total: $x^{2} - x - 2$"
          ]
        },
        {
          "id": "P-S3-6-T2",
          "skill": "S3",
          "template": "F6",
          "difficulty": 3,
          "stem": "If $f(x) = x^{2} - 6 x$, which expression is equivalent to $f(x + 3)$?",
          "choices": [
            {
              "text": "x^{2} - 6 x + 3",
              "correct": false,
              "misconception": "added-h-to-output",
              "label": "A"
            },
            {
              "text": "x^{2} - 6 x - 18",
              "correct": false,
              "misconception": "substituted-only-in-linear-term",
              "label": "B"
            },
            {
              "text": "x^{2} - 9",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "x^{2} - 6 x - 9",
              "correct": false,
              "misconception": "squared-binomial-without-middle-term",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "What does it mean to evaluate a function at an expression instead of a number?",
            "Replace every $x$ in $f$ with $(x + 3)$, then expand.",
            "$f(x + 3) = (x + 3)^2 - 6(x + 3)$."
          ],
          "solution": [
            "$(x + 3)^2 = x^{2} + 6 x + 9$",
            "Total: $x^{2} - 9$"
          ]
        }
      ]
    },
    {
      "id": "P-S3-7",
      "skill": "S3",
      "template": "F4",
      "difficulty": 2,
      "stem": "The table shows values of a linear function $f$. What is $f(15)$?\n$\\begin{array}{c|c} x & f(x) \\\\ \\hline 0 & 8 \\\\ 1 & 2 \\\\ 2 & -4 \\\\ 3 & -10 \\end{array}$",
      "choices": [
        {
          "text": "-76",
          "correct": false,
          "misconception": "off-by-one-counting-steps",
          "label": "A"
        },
        {
          "text": "-82",
          "correct": true,
          "misconception": null,
          "label": "B"
        },
        {
          "text": "-50",
          "correct": false,
          "misconception": "assumed-proportional",
          "label": "C"
        },
        {
          "text": "-90",
          "correct": false,
          "misconception": "ignored-intercept",
          "label": "D"
        }
      ],
      "answer": "B",
      "hints": [
        "By how much does $f(x)$ change each time $x$ goes up by 1?",
        "A linear function is $f(x) = mx + b$, where $m$ is the constant change and $b = f(0)$.",
        "Here $m = -6$ and $b = 8$."
      ],
      "solution": [
        "$f(x) = 8 - 6 x$",
        "$f(15) = -82$"
      ],
      "twins": [
        {
          "id": "P-S3-7-T1",
          "skill": "S3",
          "template": "F4",
          "difficulty": 2,
          "stem": "The table shows values of a linear function $f$. What is $f(15)$?\n$\\begin{array}{c|c} x & f(x) \\\\ \\hline 0 & 10 \\\\ 1 & 11 \\\\ 2 & 12 \\\\ 3 & 13 \\end{array}$",
          "choices": [
            {
              "text": "24",
              "correct": false,
              "misconception": "off-by-one-counting-steps",
              "label": "A"
            },
            {
              "text": "65",
              "correct": false,
              "misconception": "assumed-proportional",
              "label": "B"
            },
            {
              "text": "25",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "15",
              "correct": false,
              "misconception": "ignored-intercept",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "By how much does $f(x)$ change each time $x$ goes up by 1?",
            "A linear function is $f(x) = mx + b$, where $m$ is the constant change and $b = f(0)$.",
            "Here $m = 1$ and $b = 10$."
          ],
          "solution": [
            "$f(x) = x + 10$",
            "$f(15) = 25$"
          ]
        },
        {
          "id": "P-S3-7-T2",
          "skill": "S3",
          "template": "F4",
          "difficulty": 2,
          "stem": "The table shows values of a linear function $f$. What is $f(12)$?\n$\\begin{array}{c|c} x & f(x) \\\\ \\hline 0 & -2 \\\\ 1 & 3 \\\\ 2 & 8 \\\\ 3 & 13 \\end{array}$",
          "choices": [
            {
              "text": "53",
              "correct": false,
              "misconception": "off-by-one-counting-steps",
              "label": "A"
            },
            {
              "text": "60",
              "correct": false,
              "misconception": "ignored-intercept",
              "label": "B"
            },
            {
              "text": "58",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "52",
              "correct": false,
              "misconception": "assumed-proportional",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "By how much does $f(x)$ change each time $x$ goes up by 1?",
            "A linear function is $f(x) = mx + b$, where $m$ is the constant change and $b = f(0)$.",
            "Here $m = 5$ and $b = -2$."
          ],
          "solution": [
            "$f(x) = 5 x - 2$",
            "$f(12) = 58$"
          ]
        }
      ]
    },
    {
      "id": "P-S3-8",
      "skill": "S3",
      "template": "F6",
      "difficulty": 3,
      "stem": "If $f(x) = x^{2} + 6 x$, which expression is equivalent to $f(x - 3)$?",
      "choices": [
        {
          "text": "x^{2} + 6 x - 18",
          "correct": false,
          "misconception": "substituted-only-in-linear-term",
          "label": "A"
        },
        {
          "text": "x^{2} + 6 x - 9",
          "correct": false,
          "misconception": "squared-binomial-without-middle-term",
          "label": "B"
        },
        {
          "text": "x^{2} + 6 x - 3",
          "correct": false,
          "misconception": "added-h-to-output",
          "label": "C"
        },
        {
          "text": "x^{2} - 9",
          "correct": true,
          "misconception": null,
          "label": "D"
        }
      ],
      "answer": "D",
      "hints": [
        "What does it mean to evaluate a function at an expression instead of a number?",
        "Replace every $x$ in $f$ with $(x - 3)$, then expand.",
        "$f(x - 3) = (x - 3)^2 + 6(x - 3)$."
      ],
      "solution": [
        "$(x - 3)^2 = x^{2} - 6 x + 9$",
        "Total: $x^{2} - 9$"
      ],
      "twins": [
        {
          "id": "P-S3-8-T1",
          "skill": "S3",
          "template": "F6",
          "difficulty": 3,
          "stem": "If $f(x) = x^{2} + x$, which expression is equivalent to $f(x + 2)$?",
          "choices": [
            {
              "text": "x^{2} + 5 x + 6",
              "correct": true,
              "misconception": null,
              "label": "A"
            },
            {
              "text": "x^{2} + 3 x + 6",
              "correct": false,
              "misconception": "middle-term-coefficient-error",
              "label": "B"
            },
            {
              "text": "x^{2} + x + 6",
              "correct": false,
              "misconception": "squared-binomial-without-middle-term",
              "label": "C"
            },
            {
              "text": "x^{2} + x + 2",
              "correct": false,
              "misconception": "added-h-to-output",
              "label": "D"
            }
          ],
          "answer": "A",
          "hints": [
            "What does it mean to evaluate a function at an expression instead of a number?",
            "Replace every $x$ in $f$ with $(x + 2)$, then expand.",
            "$f(x + 2) = (x + 2)^2 + 1(x + 2)$."
          ],
          "solution": [
            "$(x + 2)^2 = x^{2} + 4 x + 4$",
            "Total: $x^{2} + 5 x + 6$"
          ]
        },
        {
          "id": "P-S3-8-T2",
          "skill": "S3",
          "template": "F6",
          "difficulty": 3,
          "stem": "If $f(x) = x^{2} - 7 x$, which expression is equivalent to $f(x - 2)$?",
          "choices": [
            {
              "text": "x^{2} - 7 x + 14",
              "correct": false,
              "misconception": "substituted-only-in-linear-term",
              "label": "A"
            },
            {
              "text": "x^{2} - 11 x + 18",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "x^{2} - 7 x - 2",
              "correct": false,
              "misconception": "added-h-to-output",
              "label": "C"
            },
            {
              "text": "x^{2} - 7 x + 18",
              "correct": false,
              "misconception": "squared-binomial-without-middle-term",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "What does it mean to evaluate a function at an expression instead of a number?",
            "Replace every $x$ in $f$ with $(x - 2)$, then expand.",
            "$f(x - 2) = (x - 2)^2 - 7(x - 2)$."
          ],
          "solution": [
            "$(x - 2)^2 = x^{2} - 4 x + 4$",
            "Total: $x^{2} - 11 x + 18$"
          ]
        }
      ]
    },
    {
      "id": "P-S4-1",
      "skill": "S4",
      "template": "T1",
      "difficulty": 1,
      "stem": "The graph of $y = x^2$ is shifted 4 units right and 3 units down. Which equation describes the new graph?",
      "choices": [
        {
          "text": "y = (x - 4)^2 - 3",
          "correct": true,
          "misconception": null,
          "label": "A"
        },
        {
          "text": "y = (x - 4)^2 + 3",
          "correct": false,
          "misconception": "vertical-shift-direction-reversed",
          "label": "B"
        },
        {
          "text": "y = (x + 4)^2 - 3",
          "correct": false,
          "misconception": "horizontal-shift-direction-reversed",
          "label": "C"
        },
        {
          "text": "y = (x + 4)^2 + 3",
          "correct": false,
          "misconception": "both-shift-directions-reversed",
          "label": "D"
        }
      ],
      "answer": "A",
      "hints": [
        "Where does the vertex of $y = x^2$ move to after the shifts?",
        "In $y = (x - h)^2 + k$, the vertex is at $(h, k)$. Shifting right makes $h$ positive.",
        "The new vertex is at $(4, -3)$."
      ],
      "solution": [
        "Vertex moves to $(4, -3)$",
        "$y = (x - 4)^2 - 3$"
      ],
      "twins": [
        {
          "id": "P-S4-1-T1",
          "skill": "S4",
          "template": "T1",
          "difficulty": 1,
          "stem": "The graph of $y = x^2$ is shifted 4 units left and 1 units down. Which equation describes the new graph?",
          "choices": [
            {
              "text": "y = (x - 4)^2 + 1",
              "correct": false,
              "misconception": "both-shift-directions-reversed",
              "label": "A"
            },
            {
              "text": "y = (x + 4)^2 - 1",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "y = (x + 4)^2 + 1",
              "correct": false,
              "misconception": "vertical-shift-direction-reversed",
              "label": "C"
            },
            {
              "text": "y = (x - 4)^2 - 1",
              "correct": false,
              "misconception": "horizontal-shift-direction-reversed",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "Where does the vertex of $y = x^2$ move to after the shifts?",
            "In $y = (x - h)^2 + k$, the vertex is at $(h, k)$. Shifting right makes $h$ positive.",
            "The new vertex is at $(-4, -1)$."
          ],
          "solution": [
            "Vertex moves to $(-4, -1)$",
            "$y = (x + 4)^2 - 1$"
          ]
        },
        {
          "id": "P-S4-1-T2",
          "skill": "S4",
          "template": "T1",
          "difficulty": 1,
          "stem": "The graph of $y = x^2$ is shifted 2 units right and 9 units up. Which equation describes the new graph?",
          "choices": [
            {
              "text": "y = (x - 2)^2 - 9",
              "correct": false,
              "misconception": "vertical-shift-direction-reversed",
              "label": "A"
            },
            {
              "text": "y = (x + 2)^2 - 9",
              "correct": false,
              "misconception": "both-shift-directions-reversed",
              "label": "B"
            },
            {
              "text": "y = (x - 2)^2 + 9",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "y = (x + 2)^2 + 9",
              "correct": false,
              "misconception": "horizontal-shift-direction-reversed",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "Where does the vertex of $y = x^2$ move to after the shifts?",
            "In $y = (x - h)^2 + k$, the vertex is at $(h, k)$. Shifting right makes $h$ positive.",
            "The new vertex is at $(2, 9)$."
          ],
          "solution": [
            "Vertex moves to $(2, 9)$",
            "$y = (x - 2)^2 + 9$"
          ]
        }
      ]
    },
    {
      "id": "P-S4-2",
      "skill": "S4",
      "template": "T2",
      "difficulty": 2,
      "stem": "What are the coordinates of the vertex of the graph of $y = 3(x + 8)^2 - 5$?",
      "choices": [
        {
          "text": "(8, -5)",
          "correct": false,
          "misconception": "sign-of-h-in-vertex-form",
          "label": "A"
        },
        {
          "text": "(-5, -8)",
          "correct": false,
          "misconception": "swapped-coordinates",
          "label": "B"
        },
        {
          "text": "(-8, 5)",
          "correct": false,
          "misconception": "sign-of-k-in-vertex-form",
          "label": "C"
        },
        {
          "text": "(-8, -5)",
          "correct": true,
          "misconception": null,
          "label": "D"
        }
      ],
      "answer": "D",
      "hints": [
        "What value of $x$ makes the squared part equal to zero?",
        "In $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Watch the sign inside the parentheses.",
        "The squared part is zero when $x = -8$."
      ],
      "solution": [
        "$x = -8$ makes $(x + 8)^2 = 0$",
        "Then $y = -5$, so the vertex is $(-8, -5)$"
      ],
      "twins": [
        {
          "id": "P-S4-2-T1",
          "skill": "S4",
          "template": "T2",
          "difficulty": 2,
          "stem": "What are the coordinates of the vertex of the graph of $y = \\frac{1}{2}(x + 6)^2 - 3$?",
          "choices": [
            {
              "text": "(-6, 3)",
              "correct": false,
              "misconception": "sign-of-k-in-vertex-form",
              "label": "A"
            },
            {
              "text": "(-6, -3)",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "(-3, -6)",
              "correct": false,
              "misconception": "swapped-coordinates",
              "label": "C"
            },
            {
              "text": "(6, -3)",
              "correct": false,
              "misconception": "sign-of-h-in-vertex-form",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "What value of $x$ makes the squared part equal to zero?",
            "In $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Watch the sign inside the parentheses.",
            "The squared part is zero when $x = -6$."
          ],
          "solution": [
            "$x = -6$ makes $(x + 6)^2 = 0$",
            "Then $y = -3$, so the vertex is $(-6, -3)$"
          ]
        },
        {
          "id": "P-S4-2-T2",
          "skill": "S4",
          "template": "T2",
          "difficulty": 2,
          "stem": "What are the coordinates of the vertex of the graph of $y = 2(x - 8)^2 + 1$?",
          "choices": [
            {
              "text": "(1, 8)",
              "correct": false,
              "misconception": "swapped-coordinates",
              "label": "A"
            },
            {
              "text": "(8, -1)",
              "correct": false,
              "misconception": "sign-of-k-in-vertex-form",
              "label": "B"
            },
            {
              "text": "(8, 1)",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "(-8, 1)",
              "correct": false,
              "misconception": "sign-of-h-in-vertex-form",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "What value of $x$ makes the squared part equal to zero?",
            "In $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Watch the sign inside the parentheses.",
            "The squared part is zero when $x = 8$."
          ],
          "solution": [
            "$x = 8$ makes $(x - 8)^2 = 0$",
            "Then $y = 1$, so the vertex is $(8, 1)$"
          ]
        }
      ]
    },
    {
      "id": "P-S4-3",
      "skill": "S4",
      "template": "T3",
      "difficulty": 2,
      "stem": "A line passes through the points $(-1, -3)$ and $(2, -6)$. What is its $y$-intercept?",
      "choices": [
        {
          "text": "-4",
          "correct": true,
          "misconception": null,
          "label": "A"
        },
        {
          "text": "-2",
          "correct": false,
          "misconception": "sign-error-solving-for-b",
          "label": "B"
        },
        {
          "text": "-1",
          "correct": false,
          "misconception": "reported-slope",
          "label": "C"
        },
        {
          "text": "4",
          "correct": false,
          "misconception": "sign-error-intercept",
          "label": "D"
        }
      ],
      "answer": "A",
      "hints": [
        "What two pieces of information define a line in slope-intercept form?",
        "Find the slope with rise over run, then substitute one point into $y = mx + b$.",
        "The slope is $\\dfrac{-6 - (-3)}{2 - (-1)} = -1$."
      ],
      "solution": [
        "$m = -1$",
        "$-3 = -1(-1) + b \\Rightarrow b = -4$"
      ],
      "twins": [
        {
          "id": "P-S4-3-T1",
          "skill": "S4",
          "template": "T3",
          "difficulty": 2,
          "stem": "A line passes through the points $(2, -16)$ and $(-2, 0)$. What is its $y$-intercept?",
          "choices": [
            {
              "text": "-24",
              "correct": false,
              "misconception": "sign-error-solving-for-b",
              "label": "A"
            },
            {
              "text": "-4",
              "correct": false,
              "misconception": "reported-slope",
              "label": "B"
            },
            {
              "text": "-8",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "8",
              "correct": false,
              "misconception": "sign-error-intercept",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "What two pieces of information define a line in slope-intercept form?",
            "Find the slope with rise over run, then substitute one point into $y = mx + b$.",
            "The slope is $\\dfrac{0 - (-16)}{-2 - (2)} = -4$."
          ],
          "solution": [
            "$m = -4$",
            "$-16 = -4(2) + b \\Rightarrow b = -8$"
          ]
        },
        {
          "id": "P-S4-3-T2",
          "skill": "S4",
          "template": "T3",
          "difficulty": 2,
          "stem": "A line passes through the points $(-4, 12)$ and $(3, -16)$. What is its $y$-intercept?",
          "choices": [
            {
              "text": "-4",
              "correct": true,
              "misconception": null,
              "label": "A"
            },
            {
              "text": "28",
              "correct": false,
              "misconception": "sign-error-solving-for-b",
              "label": "B"
            },
            {
              "text": "11",
              "correct": false,
              "misconception": "used-reciprocal-slope",
              "label": "C"
            },
            {
              "text": "4",
              "correct": false,
              "misconception": "sign-error-intercept",
              "label": "D"
            }
          ],
          "answer": "A",
          "hints": [
            "What two pieces of information define a line in slope-intercept form?",
            "Find the slope with rise over run, then substitute one point into $y = mx + b$.",
            "The slope is $\\dfrac{-16 - (12)}{3 - (-4)} = -4$."
          ],
          "solution": [
            "$m = -4$",
            "$12 = -4(-4) + b \\Rightarrow b = -4$"
          ]
        }
      ]
    },
    {
      "id": "P-S4-4",
      "skill": "S4",
      "template": "T4",
      "difficulty": 2,
      "stem": "An exponential function $f$ satisfies $f(0) = 4$ and $f(1) = 8$. Which of the following could be $f(x)$?",
      "choices": [
        {
          "text": "4(2)^x",
          "correct": true,
          "misconception": null,
          "label": "A"
        },
        {
          "text": "4 x + 4",
          "correct": false,
          "misconception": "linear-instead-of-exponential",
          "label": "B"
        },
        {
          "text": "2(4)^x",
          "correct": false,
          "misconception": "swapped-initial-value-and-base",
          "label": "C"
        },
        {
          "text": "(8)^x",
          "correct": false,
          "misconception": "combined-coefficient-into-base",
          "label": "D"
        }
      ],
      "answer": "A",
      "hints": [
        "In $f(x) = a \\cdot b^x$, what is $f(0)$?",
        "$f(0) = a$ gives the starting value; $f(1)/f(0)$ gives the base $b$.",
        "$a = 4$ and $b = 8/4 = 2$."
      ],
      "solution": [
        "$a = f(0) = 4$",
        "$b = f(1)/f(0) = 2$, so $f(x) = 4(2)^x$"
      ],
      "twins": [
        {
          "id": "P-S4-4-T1",
          "skill": "S4",
          "template": "T4",
          "difficulty": 2,
          "stem": "An exponential function $f$ satisfies $f(0) = 6$ and $f(1) = 24$. Which of the following could be $f(x)$?",
          "choices": [
            {
              "text": "4(6)^x",
              "correct": false,
              "misconception": "swapped-initial-value-and-base",
              "label": "A"
            },
            {
              "text": "6(4)^x",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "18 x + 6",
              "correct": false,
              "misconception": "linear-instead-of-exponential",
              "label": "C"
            },
            {
              "text": "(24)^x",
              "correct": false,
              "misconception": "combined-coefficient-into-base",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "In $f(x) = a \\cdot b^x$, what is $f(0)$?",
            "$f(0) = a$ gives the starting value; $f(1)/f(0)$ gives the base $b$.",
            "$a = 6$ and $b = 24/6 = 4$."
          ],
          "solution": [
            "$a = f(0) = 6$",
            "$b = f(1)/f(0) = 4$, so $f(x) = 6(4)^x$"
          ]
        },
        {
          "id": "P-S4-4-T2",
          "skill": "S4",
          "template": "T4",
          "difficulty": 2,
          "stem": "An exponential function $f$ satisfies $f(0) = 2$ and $f(1) = 6$. Which of the following could be $f(x)$?",
          "choices": [
            {
              "text": "(6)^x",
              "correct": false,
              "misconception": "combined-coefficient-into-base",
              "label": "A"
            },
            {
              "text": "4 x + 2",
              "correct": false,
              "misconception": "linear-instead-of-exponential",
              "label": "B"
            },
            {
              "text": "2(3)^x",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "3(2)^x",
              "correct": false,
              "misconception": "swapped-initial-value-and-base",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "In $f(x) = a \\cdot b^x$, what is $f(0)$?",
            "$f(0) = a$ gives the starting value; $f(1)/f(0)$ gives the base $b$.",
            "$a = 2$ and $b = 6/2 = 3$."
          ],
          "solution": [
            "$a = f(0) = 2$",
            "$b = f(1)/f(0) = 3$, so $f(x) = 2(3)^x$"
          ]
        }
      ]
    },
    {
      "id": "P-S4-5",
      "skill": "S4",
      "template": "T5",
      "difficulty": 3,
      "stem": "How is the graph of $g(x) = -4f(x) + 4$ obtained from the graph of $y = f(x)$?",
      "choices": [
        {
          "text": "\\text{Reflect over the x-axis, shrink vertically by a factor of } 1/4\\text{, shift 4 up}",
          "correct": false,
          "misconception": "stretch-vs-shrink",
          "label": "A"
        },
        {
          "text": "\\text{Reflect over the x-axis, stretch vertically by 4, shift 4 up}",
          "correct": true,
          "misconception": null,
          "label": "B"
        },
        {
          "text": "\\text{Reflect over the x-axis, stretch vertically by 4, shift 4 down}",
          "correct": false,
          "misconception": "vertical-shift-direction",
          "label": "C"
        },
        {
          "text": "\\text{Reflect over the y-axis, stretch vertically by 4, shift 4 up}",
          "correct": false,
          "misconception": "confused-reflection-axes",
          "label": "D"
        }
      ],
      "answer": "B",
      "hints": [
        "Which part of the rule changes the outputs (y-values), and which would change the inputs?",
        "A negative multiplier outside $f$ flips y-values over the x-axis; its size stretches; the added constant shifts.",
        "Multiplying outputs by $-4$ both flips and stretches; then $4$ is added to every output."
      ],
      "solution": [
        "$-1$: reflect over the x-axis; $4$: vertical stretch by 4",
        "$+ 4$: shift 4 units up"
      ],
      "twins": [
        {
          "id": "P-S4-5-T1",
          "skill": "S4",
          "template": "T5",
          "difficulty": 3,
          "stem": "How is the graph of $g(x) = -4f(x) - 5$ obtained from the graph of $y = f(x)$?",
          "choices": [
            {
              "text": "\\text{Reflect over the y-axis, stretch vertically by 4, shift 5 down}",
              "correct": false,
              "misconception": "confused-reflection-axes",
              "label": "A"
            },
            {
              "text": "\\text{Reflect over the x-axis, stretch vertically by 4, shift 5 up}",
              "correct": false,
              "misconception": "vertical-shift-direction",
              "label": "B"
            },
            {
              "text": "\\text{Reflect over the x-axis, shrink vertically by a factor of } 1/4\\text{, shift 5 down}",
              "correct": false,
              "misconception": "stretch-vs-shrink",
              "label": "C"
            },
            {
              "text": "\\text{Reflect over the x-axis, stretch vertically by 4, shift 5 down}",
              "correct": true,
              "misconception": null,
              "label": "D"
            }
          ],
          "answer": "D",
          "hints": [
            "Which part of the rule changes the outputs (y-values), and which would change the inputs?",
            "A negative multiplier outside $f$ flips y-values over the x-axis; its size stretches; the added constant shifts.",
            "Multiplying outputs by $-4$ both flips and stretches; then $-5$ is added to every output."
          ],
          "solution": [
            "$-1$: reflect over the x-axis; $4$: vertical stretch by 4",
            "$- 5$: shift 5 units down"
          ]
        },
        {
          "id": "P-S4-5-T2",
          "skill": "S4",
          "template": "T5",
          "difficulty": 3,
          "stem": "How is the graph of $g(x) = -2f(x) + 6$ obtained from the graph of $y = f(x)$?",
          "choices": [
            {
              "text": "\\text{Reflect over the x-axis, stretch vertically by 2, shift 6 down}",
              "correct": false,
              "misconception": "vertical-shift-direction",
              "label": "A"
            },
            {
              "text": "\\text{Reflect over the x-axis, stretch vertically by 2, shift 6 up}",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "\\text{Reflect over the x-axis, shrink vertically by a factor of } 1/2\\text{, shift 6 up}",
              "correct": false,
              "misconception": "stretch-vs-shrink",
              "label": "C"
            },
            {
              "text": "\\text{Reflect over the y-axis, stretch vertically by 2, shift 6 up}",
              "correct": false,
              "misconception": "confused-reflection-axes",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "Which part of the rule changes the outputs (y-values), and which would change the inputs?",
            "A negative multiplier outside $f$ flips y-values over the x-axis; its size stretches; the added constant shifts.",
            "Multiplying outputs by $-2$ both flips and stretches; then $6$ is added to every output."
          ],
          "solution": [
            "$-1$: reflect over the x-axis; $2$: vertical stretch by 2",
            "$+ 6$: shift 6 units up"
          ]
        }
      ]
    },
    {
      "id": "P-S4-6",
      "skill": "S4",
      "template": "T6",
      "difficulty": 3,
      "stem": "At how many points do the graphs of $y = x^{2} + 6$ and $y = 6 x - 8$ intersect?",
      "choices": [
        {
          "text": "\\text{Infinitely many}",
          "correct": false,
          "misconception": "confused-intersection-with-identical-graphs",
          "label": "A"
        },
        {
          "text": "1",
          "correct": false,
          "misconception": "assumed-tangent",
          "label": "B"
        },
        {
          "text": "2",
          "correct": false,
          "misconception": "assumed-line-always-crosses-twice",
          "label": "C"
        },
        {
          "text": "0",
          "correct": true,
          "misconception": null,
          "label": "D"
        }
      ],
      "answer": "D",
      "hints": [
        "What equation do you get by setting the two $y$-expressions equal?",
        "The number of real solutions of the resulting quadratic equals the number of intersection points. Use the discriminant.",
        "Setting them equal gives $x^{2} - 6 x + 14 = 0$."
      ],
      "solution": [
        "$x^{2} - 6 x + 14 = 0$, discriminant $= 36 - 4(14) = -20$",
        "Discriminant < 0, so 0 point(s)"
      ],
      "twins": [
        {
          "id": "P-S4-6-T1",
          "skill": "S4",
          "template": "T6",
          "difficulty": 3,
          "stem": "At how many points do the graphs of $y = x^{2} + 8$ and $y = - 2 x - 3$ intersect?",
          "choices": [
            {
              "text": "2",
              "correct": false,
              "misconception": "assumed-line-always-crosses-twice",
              "label": "A"
            },
            {
              "text": "0",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "1",
              "correct": false,
              "misconception": "assumed-tangent",
              "label": "C"
            },
            {
              "text": "\\text{Infinitely many}",
              "correct": false,
              "misconception": "confused-intersection-with-identical-graphs",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "What equation do you get by setting the two $y$-expressions equal?",
            "The number of real solutions of the resulting quadratic equals the number of intersection points. Use the discriminant.",
            "Setting them equal gives $x^{2} + 2 x + 11 = 0$."
          ],
          "solution": [
            "$x^{2} + 2 x + 11 = 0$, discriminant $= 4 - 4(11) = -40$",
            "Discriminant < 0, so 0 point(s)"
          ]
        },
        {
          "id": "P-S4-6-T2",
          "skill": "S4",
          "template": "T6",
          "difficulty": 3,
          "stem": "At how many points do the graphs of $y = x^{2} - 8$ and $y = 6 x - 7$ intersect?",
          "choices": [
            {
              "text": "2",
              "correct": true,
              "misconception": null,
              "label": "A"
            },
            {
              "text": "0",
              "correct": false,
              "misconception": "sign-error-discriminant",
              "label": "B"
            },
            {
              "text": "1",
              "correct": false,
              "misconception": "assumed-tangent",
              "label": "C"
            },
            {
              "text": "\\text{Infinitely many}",
              "correct": false,
              "misconception": "confused-intersection-with-identical-graphs",
              "label": "D"
            }
          ],
          "answer": "A",
          "hints": [
            "What equation do you get by setting the two $y$-expressions equal?",
            "The number of real solutions of the resulting quadratic equals the number of intersection points. Use the discriminant.",
            "Setting them equal gives $x^{2} - 6 x - 1 = 0$."
          ],
          "solution": [
            "$x^{2} - 6 x - 1 = 0$, discriminant $= 36 - 4(-1) = 40$",
            "Discriminant > 0, so 2 point(s)"
          ]
        }
      ]
    },
    {
      "id": "P-S4-7",
      "skill": "S4",
      "template": "T4",
      "difficulty": 2,
      "stem": "An exponential function $f$ satisfies $f(0) = 3$ and $f(1) = 12$. Which of the following could be $f(x)$?",
      "choices": [
        {
          "text": "9 x + 3",
          "correct": false,
          "misconception": "linear-instead-of-exponential",
          "label": "A"
        },
        {
          "text": "3(4)^x",
          "correct": true,
          "misconception": null,
          "label": "B"
        },
        {
          "text": "(12)^x",
          "correct": false,
          "misconception": "combined-coefficient-into-base",
          "label": "C"
        },
        {
          "text": "4(3)^x",
          "correct": false,
          "misconception": "swapped-initial-value-and-base",
          "label": "D"
        }
      ],
      "answer": "B",
      "hints": [
        "In $f(x) = a \\cdot b^x$, what is $f(0)$?",
        "$f(0) = a$ gives the starting value; $f(1)/f(0)$ gives the base $b$.",
        "$a = 3$ and $b = 12/3 = 4$."
      ],
      "solution": [
        "$a = f(0) = 3$",
        "$b = f(1)/f(0) = 4$, so $f(x) = 3(4)^x$"
      ],
      "twins": [
        {
          "id": "P-S4-7-T1",
          "skill": "S4",
          "template": "T4",
          "difficulty": 2,
          "stem": "An exponential function $f$ satisfies $f(0) = 6$ and $f(1) = 12$. Which of the following could be $f(x)$?",
          "choices": [
            {
              "text": "(12)^x",
              "correct": false,
              "misconception": "combined-coefficient-into-base",
              "label": "A"
            },
            {
              "text": "6(2)^x",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "2(6)^x",
              "correct": false,
              "misconception": "swapped-initial-value-and-base",
              "label": "C"
            },
            {
              "text": "6 x + 6",
              "correct": false,
              "misconception": "linear-instead-of-exponential",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "In $f(x) = a \\cdot b^x$, what is $f(0)$?",
            "$f(0) = a$ gives the starting value; $f(1)/f(0)$ gives the base $b$.",
            "$a = 6$ and $b = 12/6 = 2$."
          ],
          "solution": [
            "$a = f(0) = 6$",
            "$b = f(1)/f(0) = 2$, so $f(x) = 6(2)^x$"
          ]
        },
        {
          "id": "P-S4-7-T2",
          "skill": "S4",
          "template": "T4",
          "difficulty": 2,
          "stem": "An exponential function $f$ satisfies $f(0) = 6$ and $f(1) = 18$. Which of the following could be $f(x)$?",
          "choices": [
            {
              "text": "3(6)^x",
              "correct": false,
              "misconception": "swapped-initial-value-and-base",
              "label": "A"
            },
            {
              "text": "6(3)^x",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "12 x + 6",
              "correct": false,
              "misconception": "linear-instead-of-exponential",
              "label": "C"
            },
            {
              "text": "(18)^x",
              "correct": false,
              "misconception": "combined-coefficient-into-base",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "In $f(x) = a \\cdot b^x$, what is $f(0)$?",
            "$f(0) = a$ gives the starting value; $f(1)/f(0)$ gives the base $b$.",
            "$a = 6$ and $b = 18/6 = 3$."
          ],
          "solution": [
            "$a = f(0) = 6$",
            "$b = f(1)/f(0) = 3$, so $f(x) = 6(3)^x$"
          ]
        }
      ]
    },
    {
      "id": "P-S4-8",
      "skill": "S4",
      "template": "T6",
      "difficulty": 3,
      "stem": "At how many points do the graphs of $y = x^{2} - 3$ and $y = - x - 4$ intersect?",
      "choices": [
        {
          "text": "1",
          "correct": false,
          "misconception": "assumed-tangent",
          "label": "A"
        },
        {
          "text": "\\text{Infinitely many}",
          "correct": false,
          "misconception": "confused-intersection-with-identical-graphs",
          "label": "B"
        },
        {
          "text": "2",
          "correct": false,
          "misconception": "assumed-line-always-crosses-twice",
          "label": "C"
        },
        {
          "text": "0",
          "correct": true,
          "misconception": null,
          "label": "D"
        }
      ],
      "answer": "D",
      "hints": [
        "What equation do you get by setting the two $y$-expressions equal?",
        "The number of real solutions of the resulting quadratic equals the number of intersection points. Use the discriminant.",
        "Setting them equal gives $x^{2} + x + 1 = 0$."
      ],
      "solution": [
        "$x^{2} + x + 1 = 0$, discriminant $= 1 - 4(1) = -3$",
        "Discriminant < 0, so 0 point(s)"
      ],
      "twins": [
        {
          "id": "P-S4-8-T1",
          "skill": "S4",
          "template": "T6",
          "difficulty": 3,
          "stem": "At how many points do the graphs of $y = x^{2} - 5$ and $y = 6 x - 7$ intersect?",
          "choices": [
            {
              "text": "1",
              "correct": false,
              "misconception": "assumed-tangent",
              "label": "A"
            },
            {
              "text": "2",
              "correct": true,
              "misconception": null,
              "label": "B"
            },
            {
              "text": "\\text{Infinitely many}",
              "correct": false,
              "misconception": "confused-intersection-with-identical-graphs",
              "label": "C"
            },
            {
              "text": "0",
              "correct": false,
              "misconception": "sign-error-discriminant",
              "label": "D"
            }
          ],
          "answer": "B",
          "hints": [
            "What equation do you get by setting the two $y$-expressions equal?",
            "The number of real solutions of the resulting quadratic equals the number of intersection points. Use the discriminant.",
            "Setting them equal gives $x^{2} - 6 x + 2 = 0$."
          ],
          "solution": [
            "$x^{2} - 6 x + 2 = 0$, discriminant $= 36 - 4(2) = 28$",
            "Discriminant > 0, so 2 point(s)"
          ]
        },
        {
          "id": "P-S4-8-T2",
          "skill": "S4",
          "template": "T6",
          "difficulty": 3,
          "stem": "At how many points do the graphs of $y = x^{2} + 5$ and $y = 2 x + 3$ intersect?",
          "choices": [
            {
              "text": "1",
              "correct": false,
              "misconception": "assumed-tangent",
              "label": "A"
            },
            {
              "text": "2",
              "correct": false,
              "misconception": "assumed-line-always-crosses-twice",
              "label": "B"
            },
            {
              "text": "0",
              "correct": true,
              "misconception": null,
              "label": "C"
            },
            {
              "text": "\\text{Infinitely many}",
              "correct": false,
              "misconception": "confused-intersection-with-identical-graphs",
              "label": "D"
            }
          ],
          "answer": "C",
          "hints": [
            "What equation do you get by setting the two $y$-expressions equal?",
            "The number of real solutions of the resulting quadratic equals the number of intersection points. Use the discriminant.",
            "Setting them equal gives $x^{2} - 2 x + 2 = 0$."
          ],
          "solution": [
            "$x^{2} - 2 x + 2 = 0$, discriminant $= 4 - 4(2) = -4$",
            "Discriminant < 0, so 0 point(s)"
          ]
        }
      ]
    }
  ]
};

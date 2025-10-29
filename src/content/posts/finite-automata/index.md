---
title: 'Finite Automata'
published: 2025-10-26
draft: true
tags: ['theory', 'computing']
toc: true
series: 'Turing Machines'
coverImage:
  src: './cover.png'
  alt: 'A cyberphunky machine.'
---

## Prologue

In this series of blog post we are going to learn about Turing Machines, but before that we need to introduce some concepts of the theory of computation. In this part we introduce finite automata.

:::note
We are going to do some abstract math, but don't you fret I got you covered.
:::

## Introduction

Have you ever been asked the question, "What is a computer"?. Well, according to the Oxford Advanced Learner's dictionary a computer:

> an electronic machine that can store, organize and find information, do processes with numbers and other data, and control other machines

Hmm..., that is deep, but I want you to take note of the features, _store, organise, find information, and process_. By design, the real computers we have around us are complex in a way that we cannot directly set up a mathematical theory for them. Instead, we use **computational model** which is a form of idealised computer. In understanding the theory of computation we are going to introduce some models of computer depending on depending on the feature of computer we want to focus on.

![A simple computer model](./computer-model.jpg 'A simple computer model')

The simplest of computational model we can have is the _finite automaton (plural: automata)_, because they are best for computers with extremely limited amount of memory. In fact, there are severaal finite automata systems around us, for exampe an automatic door in a shopping mall.

## AIMS main door

To explain how a finite automaton works, I am going to use the mechanism of the main door at the _African Institute for Mathematical Sciences_ (where I'm currently a student btw) as an example.

Every students has a personal token they scan in order to enter or exit the main building, with the way the door is, we can only have two states _locked_ and _unlocked_. Now, suppose a student **Bongo** is coming from outside he has to scan his token and push the door to enter an the push from the inside to lock the door again, and this is synonymous to another student **Ada** exiting the building (but she has to pull the door to get it into it locked state after scanning her token).

Now, we can think of the door to take in three inputs:

- token,
- push and
- pull

And here is the mechanism:

- If the door is locked and a token is scanned then state of the door shift from _locked_ to _unlocked_
- If the door is unlocked, no matter the number of time you try to scan a token the door remains unlocked
- If the door is locked no matter the push or pull (unless you're Hulk :new_moon_with_face:), the door remain locked.
- If the door is _unlocked_, it can either be push or pull to shift it to _locked_ state.

Consider the following table
|State / Input | Push | Pull | Token |
| ---------- | ------ | ----- | ----- |
| **LOCKED** | _LOCKED_ | _LOCKED_ | _UNOCKED_ |
| **UNLOCKED** | _LOCKED_ | _LOCKED_ | _UNOCKED_ |

And it is also represented in the following figure.

![AIMS door machine](./aims-door-machine.jpg 'AIMS door machine')

## Abstract-adabra

Now that, we've got a glimpse of how a finite automaton work, it's high time we formalised the concepts into mathematical theory without a reference to an object.

:::duck
We are using mathematical symbols as a way to represent machines generally. Imagine we have to write description for every finite automaton system we have, that would be very tedious :roll_eyes:. Besides we are artist, so we need a unique way to represent our artistic work :nerd_face:.
:::

<!--From our door model, we have that the set of possible states the machine can be is $\{ \text{LOCKED, UNLOCKED} \}$, for inputs we have $\{ \text{PULL, PUSH, TOKEN} \}$-->

Consider the following figure

![A simple abstract finite automaton](./simple-abstract.jpg 'A simple abstract finite automaton')

Let the machine in the above picture be $M_1$, we can see it has three states $q_1, q_2, q_3$ wuth different transitions between each states.

:::note

- The state with the double circle is called an _accept_ state.
- The arrow from pointing towards $q_1$ is where the input is being passed and it shows that $q_1$ is the _start state_ (i.e where the machine $M_1$ start processing inputs.)
  :::

:::important
The input for our machines are strings which are elements of $\{0, 1\}^n$
:::

Suppose we feed $M_1$ the string $10101$, then we would have the following sequence of processses:

- Start at $q_1$
- Read $1$ then transition to $q_2$
- Read $0$ then transition from $q_2$ to $q_3$
- Read $1$ then transition from $q_3$ to $q_2$
- Read $0$ then transition from $q_2$ to $q_3$
- Read $1$ then transition from $q_3$ to $q_2$
- Accept, because $M_1$ is in an accept state.

:::duck
If the processing of an input in a machine stops in the accept state we say that the machine _accept_ the input else we say the machine _reject_ the input. Hence, the output from a machine is either _accept_ or _reject_.
:::

Now, we give a formal definition for a finite automaton.

:::note
A finite automaton is a 5-tuple $(Q, \Sigma, \delta, q_0, F)$, where

- $Q$ is a finite set called states
- $\Sigma$ is a finite set called the alphabet
- $\delta : Q \times \Sigma \longrightarrow Q$ is the transition function
- $q_0$ is the start state
- $F \subseteq Q$ is the set of accept states
  :::

![A simple abstract finite automaton](./simple-abstract.jpg 'Machine $M_1$')
In the case of $M_1$, we can write the following

- $Q = \{ q_1, q_2, q_3\}$
- $\Sigma = \{0, 1\} $
- $\delta$

|         | $0$   | $1$   |
| ------- | ----- | ----- |
| _$q_1$_ | $q_1$ | $q_1$ |
| _$q_2$_ | $q_3$ | $q_2$ |
| _$q_3$_ | $q_2$ | $q_2$ |

- $F = \{q_2 \} $

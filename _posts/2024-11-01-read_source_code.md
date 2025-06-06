---
layout: post
title: Read source code
date: 2024-11-01 13:00:00
description: 
tags:
categories: coding
featured: true
giscus_comments: true
related_posts: false
---

As I've done coding for three years, I cannot emphasize the importance of reading source codes. 
I think for programmers and researchers, the most important thing is to fully understand others' codes on github.
Luckily, for deep learning, the code is normally written in the same framework (pytorch) and is usually simple.

However, there do exist some codes that are either not written in the framework or language that we are familiar with or usually quite complicated,
involving a lot of abstractions. Here are some of my tips that can potentially make reading code simpler. 

- Use IDE.
- Ask ChatGPT.
- Do Unit Test.

__Use IDE__

Using good IDEs can be pivotal in understanding codes. Usually people write code non-linearly. For instance, when writing 
codes in the main function, people usually write another helper function in another file before finishing the rest in the main function. 
A good IDE allows you to jump between definitions and usages easily, which makes reading non-linear codes much easier.

__Ask ChatGPT__

AI Tools like ChatGPT comes into handy when reading complicated functions or reading unfamiliar frameworks. When reading 
complicated functions, you can ask ChatGPT to explain the details to you. In addition, ChatGPT demonstrates its strong capacity 
in reading codes in another language or unfamiliar frameworks. You can ask ChatGPT to rewrite the code into the language and the 
framework that you are familiar with, and it will save you a lot of time.

__However, it is your responsibility in ensuring that the codes are right__. At the end of the day, ChatGPT is nothing but modeling the probability
distribution of the next word given all the previous words. In other words, it is not intelligent enough to ensure the codes it provide are 
correct. You should double check it.

__Do Unit Test__

Sometimes, it might help reading the code if we know what the output of the function is. For this situation, we can do some unit testing i.e., testing
single module or function. After we get the output, we might have an intuitive understanding of what the function is doing.
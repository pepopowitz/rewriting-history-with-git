Layout: module

# Rewriting History

Notes:

with a deeper understanding of git, we're ready for our second goal of the day:

becoming more comfortable with rewriting history

---

Trail: Rewriting History

## How we're going to get there

### Our tools

---

Trail: Rewriting History, Our Tools

### console

TODO: expand this

- console (today)
  - there's zero reason you can't do this with a gui
- git status
  - what's in my current working directory?
    - show example?
  - in a gui that might be listing files in different boxes
- git log
  - what it's in my commit history?
  - git loggy
  - in a gui it might show you a nice visual log
- git reflog
  - what actions have I taken in this repo?
    - show example
  - may or may not be accessible in your gui!

---

TODO: ditch this?

### With a phone booth

<!-- .element: class="fragment" -->

Notes:

I used to be scared of it too

...

that's right, we're going to time travel in a phone booth, like some of the greatest heroes in the history of mankind

---

Trail: Rewriting History, Setting The Scene

IMAGE: bill & ted in a phone booth

Notes:

I apologize for using a movie from 1989 iin this talk

but I am old and it's what I know

If there's an appropriate replacement made more recently, pretend that's what I'm talking about.

---

Layout: module

# **Spoiler Alert!!!**

---

Trail: Rewriting History, Setting The Scene

IMAGE: plot summary

Notes:

a quick plot summary for those who were not born until 10 years after this classic:

two high school students named bill & ted are in danger of flunking their history final,

which we find out would be catastrophic

as their awful garage band named wyld stallyns (spelled like that)

goes on to form the basis of a utopian society hundreds of years in the future.

to pass their final, a guy from that future society named rufus brings them a time-travelling phone booth

so they can learn about history

instead of learning about history, they steal historical figures and bring them back to their history final in 1989.

and hilarity ensues.

---

Trail: Context, Setting The Scene

## Help Bill & Ted pass their history final

IMAGE: future utopian society

---

Trail: Context, Setting The Scene

LineNumbers: 1,6|1,5|1,4|1,3|1,2

```text
> git loggy
e5e5e5e5e 5) form basis for future utopian society
d4d4d4d4d 4) deliver history report
c3c3c3c3c 3) find napoleon at the waterpark
b2b2b2b2b 2) collect historical figures
a1a1a1a1a 1) acquire phone booth at the circle k
```

IMAGE: these 4 things

Notes:

and this is how are we going to help them pass their history final

we're going to seek this git log

---

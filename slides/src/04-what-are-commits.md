Layout: module

# What is a Git commit?

---

Trail: What's a commit?

## a `commit` object + a `tree` object

---

Trail: What's a commit?

## each commit is represented by a unique identifier

- called a SHA

---

Trail: What's a commit?,SHAs

### SHA

- hash generated from the tree
- deterministically unique

---

Trail: What's a commit?,SHAs

### `git log` shows the SHAs

---

Trail: What's a commit?,SHAs

### note on git log

- this is the output by default
- through some flags, you can make it look like this
- (here's how)
- for the rest of this talk I'm going to show the git log in this format
  - and I'll call it `git loggg` to make it obvious this isn't the default behavior
  - note that you too can make your terminal recognize this command by using aliases

---

Trail: What's a commit?

## your working directory is always pointed at a specific commit/hash

---

Trail: Deeper Understanding

# What's Git?

---

Trail: Deeper Understanding, What's Git?

## Source code management (SCM)

### Keeps a record of your changes

<!-- .element: class="fragment" -->

### Helps engineers collaborate on code

<!-- .element: class="fragment" -->

Notes:

the silly answer:

the url is git-scm.com

that's what the scm stands for

...

As your code changes over time, Git helps you keep a record of the changes.

When you need to know why a change was made, or who made it (so you can ask them nicely if they remember any details), you get information from your Git history.

...

When multiple engineers want to collaborate on a project, Git helps them work independently until they're ready to integrate their changes.

---

Trail: Deeper Understanding, What's Git?

## **Distributed** Source Control

### No single source of truth

<!-- .element: class="fragment" -->

### You choose who gets your changes

<!-- .element: class="fragment" -->

Notes:

as opposed to centralized

which have a single source of truth for the codebase, on a server somewhere.

when you commit to centralized source control, your changes are persisted immediately on the server

and they're available immediately to the rest of your team

...

with a distributed system like Git,

there's no single source of truth.

No server.

though most teams use a service like GitHub or GitLab to act as a centralized host.

...

When you commit changes, your work is only available to you, on your local system.

you can choose to push those changes anywhere -- or nowhere.

---

Trail: Deeper Understanding,What's Git?,Distributed VCS

## You have freedom to rewrite the history of your code

Notes:

The ability to work in a codebase isolated from the rest of your team

gives you the freedom to rewrite the history of your code.

When you don't have to worry about immediately updating the single source of truth,

you can write and rewrite your commits many times

before sharing them with the rest of your team.

---

Trail: Deeper Understanding

# What does Git store?

Notes:

how does it store your code & its history?

---

Trail: Deeper Understanding,What Does Git Store?

## Everything is an **object**

### folders, files, branches, tags, commits, ...

Notes:

If you were to build a source control system from scratch,

how would you define the data model?

_Folders_ contain more _folders_ and _files_; branches contain folders and files; I commit changes to folders and files;

Git abstracts all of these as "objects"

TODO: some sort of illustration here?

---

Trail: Deeper Understanding,What Does Git Store?

## TODO: objects are related to each other by trees somehow???

---

Trail: Deeper Understanding,What Does Git Store?

## An entire snapshot per commit

### Not a diff!

TODO: some sort of illustration here

Notes:

Git captures an entire snapshot of your codebase in every commit.

It's not a diff! It's the entire codebase, for every commit

it optimizes how it stores them to avoid redundancy & save space

---

Trail: Deeper Understanding,What Does Git Store?

## Why do we care?

### Enables Git to quickly identify actual differences

### Enables Git to merge code with fewer conflicts

Notes:

When two files are the same underlying _object_, Git can identify quickly that they haven't changed.

When two branches in a repository contain identical subtrees represented by the same _object_, Git recognizes that nothing has changed.

When a single file is changed, the majority of the tree stays the same, and Git can quickly identify the limbs that are different.

this enables it to generate the diffs you're used to seeing, quickly and efficiently

...

When you write and rewrite your commits, Git compares and traverses subtrees to determine the final state.

This is easier and faster than if it were scouring folders and files for differences.

Less user intervention is needed to resolve the final state.

---

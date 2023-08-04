## 1. Headings

Headings are used to structure your document and are created using one or more hash symbols (#) followed by a space. The level of the heading is determined by the number of hash symbols used, ranging from 1 to 6 for headings from level 1 to 6.

Example:

```markdown
# Heading level 1

## Heading level 2

### Heading level 3
```

## 2. Inline Text

### 2.1. Italics

To make text italic, surround the text with asterisks (\*) or underscores (\_).

Example:

```markdown
_Italic text_
_Italic text_
```

### 2.2. Bold

To make text bold, surround the text with double asterisks (\*\*) or double underscores (\_\_).

Example:

```markdown
**Bold text**
**Bold text**
```

### 2.3. Combined Italics and Bold

To combine italics and bold, use triple asterisks (\*\*\*) or triple underscores (\_\_\_).

Example:

```markdown
**_Italic and bold text_**
**_Italic and bold text_**
```

### 2.4. Strikethrough

To strike through text, surround the text with tildes (~~).

Example:

```markdown
~~Strikethrough text~~
```

## 3. Lists

### 3.1. Bullet Lists

Use an asterisk (\*), a plus sign (+), or a hyphen (-) followed by a space to create bullet lists.

Example:

```markdown
- First item
- Second item
- Third item
```

### 3.2. Numbered Lists

Use numbers followed by a period and a space to create numbered lists.

Example:

```markdown
1. First item
2. Second item
3. Third item
```

### 3.3. Nested Lists

To create nested lists, add four spaces (or a tab) before the list item.

Example:

```markdown
- First item of the main list
  - First item of the nested list
  - Second item of the nested list
- Second item of the main list
```

## 4. Links

### 4.1. Inline Links

Use the syntax `[link text](URL)` to create an inline link.

Example:

```markdown
[Click here to visit Google](https://www.google.com)
```

### 4.2. Referenced Links

Referenced links allow you to define the link somewhere in the document and reference it elsewhere.

Example:

```markdown
[Visit my website][site]
...
[site]: https://www.example.com
```

## 5. Images

Insert images using the syntax `![alternative text](image URL)`.

Example:

```markdown
![Markdown Logo](https://example.com/logo.png)
```

## 6. Code Blocks

Use triple backticks (\```) to insert code blocks and specify the language for proper syntax highlighting.

Example:

````markdown
```python
print("Hello, world!")
```
````

## 7. Blockquotes

To quote text, use the greater-than symbol (>).

Example:

```markdown
> This is a blockquote.
```

## 8. Horizontal Lines

Insert a horizontal line using three asterisks (\*\*\*), hyphens (---), or underscores (\_\_\_) on a line.

Example:

```markdown
---
```

## 9. Escaping Characters

To display special characters that have meaning in Markdown, you can escape them by preceding them with a backslash (\\).

Example:

```markdown
\\- To display a hyphen without creating a bullet list.
```

## 10. Markdown Extensions

Markdown supports various extensions depending on the platforms. Some of these extensions include tables, checkboxes, table headers, etc.

Table example:

```markdown
| Name    | Age |
| ------- | --- |
| Alice   | 25  |
| Bob     | 30  |
| Charlie | 22  |
```

Checkbox example:

```markdown
- [x] Task completed
- [ ] Task not completed
```

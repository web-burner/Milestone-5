1. link tag to link up with css file 
2. script tag to linkup with js file 
3. what is DOM ? => Document Object Model
4. document > it is a html page called document 
5. object > every html element is called object 
6. model > tree structured model where every object connected like a parent child 
7. getElementsByTagName("tagName") it's return a html-collection [array like object]
8. can use for of loop to get each element 
9. getElementsByClassName('className') it return a html collection [array like object] 
10. getElementById('id') it returns a single element 
11. innerText > to get the text from html element , it used to get and set innerText of a html element 
12. querySelectorAll('') it returns a node list , like a array . can use array method 
13. what is html collection vs node list ?
    1. HTMLCollection

    An HTMLCollection contains only HTML elements.
    Features:
    * Live collection ✅
    * Contains only element nodes
    * Updates automatically if DOM changes

    2. NodeList

    A NodeList can contain:
    * Elements
    * Text nodes
    * Comments

    Features
    * Usually static ❌ (does NOT auto update)
    * Supports forEach()
    * Can contain different node types

14. querySelector('') select like a css . give only first matched element .
15. dynamic style: 
    element.style.backgroundColor = 'color'
    here property name must have to be camelCase as javascript prefer 
16. getAttribute get attribute from html element
    h1.getAttribute('id')
17. setAttribute set attribute for element
    h2.setAttribute('class','bg')
18. innerText get and set the inner text from an html element
    h2.innerText = 'Jibon ta bedona mular juice kha'
19. innerHTML get and set whole html content for an html element
    h2.innerHTML = '<p>Vallage na kichu</p>'
20. classList (add/remove/toggle)
    h1.classList.add('bg');
21. styling DOM properties 
22. nodeList 
23. htmlCollection 
24. parentNode 
25. childNodes 
26. create element 
27. appendChild/append
28. 



<!-- echo "# Milestone-5" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/web-burner/Milestone-5.git
git push -u origin main -->
const testResume = `
John Doe
Software Engineer

Experience:
- Company A (2018-2020): Developed web applications using JavaScript and React.
- Company B (2020-2022): Led a team of developers in building scalable backend services with Node.js.

Education:
- Bachelor of Science in Computer Science, University X (2014-2018)

Skills:
- Programming Languages: JavaScript, Python, Java
- Frameworks: React, Node.js, Express
- Databases: MongoDB, PostgreSQL
`

fetch('http://localhost:3000/generate', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        resumeText: testResume,
        model: 'both'
    })
})
.then(response => response.json())
.then(data => console.log("Questions generated: ", JSON.stringify(data, null, 2)))
.catch( error => console.error('Error:', error) )
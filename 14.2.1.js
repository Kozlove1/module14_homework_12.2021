const parser = new DOMParser();

const xmlString = `<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>`

const xmlDom =  parser.parseFromString(xmlString, 'text/xml');

const listNode = xmlDom.querySelector('list')
const studentNode = listNode.querySelectorAll('student');
studentNode.forEach((s, i) => {
    const nameNode = s.querySelector('name');
    const firstNode = nameNode.querySelector('first');
    const secondNode = nameNode.querySelector('second')
    const ageNode = s.querySelector('age');
    const profNode = s.querySelector('prof');
    const nameLangAttr = nameNode.getAttribute('lang');

    const list = {name: `${firstNode.textContent} ${secondNode.textContent}` , age: ageNode.textContent, prof: profNode.textContent, lang: nameLangAttr}
    console.log(list)

})

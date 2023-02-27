

function createTemplate(data) {
    let templateFile = `
    # ${data.title}


    ## Table of Contents
    - [Introduction](#introduction)
    - [Description](#description)
    - [Usage](#usage)
    - [Installation](#installation)
    - [Testing Utilities](#testing-utilities)
    - [Contributors](#contributors)
    - [LICENSE](#license)
    
    
    
    ## Introduction <a id="introduction"></a>
    ${data.description}

    ## Description <a id="description"></a>
    ${data.description}
    ## Usage <a id="usage"></a>
    ${data.usage}
    
    ## Installation <a id="installation"></a>
    ${data.installation}
    
    ## Testing Utilities <a id="testing-utilities"></a>
    ${data.tests}
    
    ## Contributors <a id="contributors"></a>
    ${data.contributors}
    
    ## LICENSE <a id="license"></a>
    
`;

return templateFile;
}
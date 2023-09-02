
    function handler(value) {
        let ptag = document.querySelector("p.count");
        
        // console.log(ptag.innerText);

        let count=parseInt(ptag.innerText.trim())
        // console.log(count)

        count+=value
        // console.log(count)
        ptag.innerText=`${count}`
        
        
    }
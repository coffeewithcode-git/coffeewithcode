document.querySelectorAll('.tooltip').forEach((tooltip)=>{
    tooltip.addEventListener("mouseenter", ()=>{
        const rect =tooltip.getBoundingClientRect();

        if(rect.top < 120){
            tooltip.classList.remove("show-top")
            tooltip.classList.add("show-below")
        }
        else{
            tooltip.classList.remove("show-below")
            tooltip.classList.add("show-top")
        }
    });
});
const buttonStatus = document.querySelectorAll("[btn-status]");
if(buttonStatus.length > 0){
    let url = new  URL(window.location.href);
    buttonStatus.forEach(button => {
        button.addEventListener("click",()=>{
        const status = button.getAttribute("btn-status");
        if(status){
           url.searchParams.set("status",status);
        }else{
            url.searchParams.delete("status");
        }
        window.location.href = url.href;
        });
        
    });
};

const searchForm = document.querySelector("#search-form");
if(searchForm){
    let url = new  URL(window.location.href);
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const keyword = e.target.keyword.value;
        if(keyword){
            url.searchParams.set("keyword",keyword);
        }else{
            url.searchParams.delete("keyword");
        }
        window.location.href = url.href;
    })
}
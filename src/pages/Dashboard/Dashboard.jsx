import "./Dashboard.css";

function Dashboard(){

const stats=[

{
title:"Applied Jobs",
value:12
},

{
title:"Saved Jobs",
value:5
},

{
title:"Interviews",
value:3
},

{
title:"Profile",
value:"80%"
}

];

const applications=[

{
company:"Google",
role:"Frontend Developer",
status:"Applied"
},

{
company:"Microsoft",
role:"React Developer",
status:"Interview"
},

{
company:"Amazon",
role:"Backend Developer",
status:"Rejected"
}

];

return(

<div className="dashboard">

<h1>

Welcome Back 👋

</h1>

<div className="stats">

{

stats.map((item,index)=>

<div
className="stat-card"
key={index}
>

<h2>

{item.value}

</h2>

<p>

{item.title}

</p>

</div>

)

}

</div>

<div className="section">

<h2>

Recent Applications

</h2>

{

applications.map((app,index)=>

<div
className="application"
key={index}
>

<div>

<h3>

{app.role}

</h3>

<p>

{app.company}

</p>

</div>

<p className="status">

{app.status}

</p>

</div>

)

}

</div>

</div>

)

}

export default Dashboard;
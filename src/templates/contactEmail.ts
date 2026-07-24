export function contactEmailTemplate(
  name: string,
  email: string,
  message: string
) {
  return `

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>New Contact Request</title>
</head>

<body style="
margin:0;
padding:0;
background:#f4f4f4;
font-family:Arial, Helvetica, sans-serif;
">

<div style="
max-width:600px;
margin:30px auto;
background:#ffffff;
border-radius:16px;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,0.08);
">


<!-- Header -->

<div style="
background:#111111;
padding:30px;
text-align:center;
">

<h1 style="
color:#ffffff;
margin:0;
font-size:26px;
">
Salman Nizam
</h1>

<p style="
color:#cccccc;
margin:10px 0 0;
font-size:14px;
">
New Portfolio Contact Request
</p>

</div>



<!-- Content -->

<div style="
padding:30px;
">


<h2 style="
color:#111111;
font-size:20px;
margin-bottom:20px;
">
Hello Salman 👋
</h2>


<p style="
color:#555555;
font-size:15px;
line-height:1.6;
">
You have received a new message from your portfolio contact form.
</p>



<div style="
margin-top:25px;
padding:20px;
background:#f8f8f8;
border-radius:12px;
border-left:4px solid #111111;
">


<p style="
margin:8px 0;
color:#333333;
">
<strong>Name:</strong>
${name}
</p>


<p style="
margin:8px 0;
color:#333333;
">
<strong>Email:</strong>
<a href="mailto:${email}" 
style="
color:#111111;
text-decoration:none;
">
${email}
</a>
</p>


</div>




<div style="
margin-top:25px;
">

<h3 style="
color:#111111;
font-size:16px;
">
Message
</h3>


<div style="
background:#111111;
color:#ffffff;
padding:18px;
border-radius:12px;
line-height:1.6;
font-size:15px;
">
${message}
</div>


</div>




<div style="
text-align:center;
margin-top:30px;
">

<a 
href="mailto:${email}"
style="
display:inline-block;
background:#111111;
color:white;
padding:12px 25px;
border-radius:30px;
text-decoration:none;
font-size:14px;
">
Reply to ${name}
</a>

</div>


</div>



<!-- Footer -->

<div style="
background:#fafafa;
padding:20px;
text-align:center;
border-top:1px solid #eeeeee;
">

<p style="
margin:0;
font-size:12px;
color:#777777;
">
Sent from Salman Nizam Portfolio Website
</p>


<p style="
margin:8px 0 0;
font-size:12px;
color:#999999;
">
© ${new Date().getFullYear()} Salman Nizam. All rights reserved.
</p>

</div>


</div>

</body>
</html>

`;
}
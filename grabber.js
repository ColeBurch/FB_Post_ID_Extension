const post_script = document.querySelectorAll(
  'script[type="application/json"]'
);

for (let i = 0; i < post_script.length; i++) {
  let script = post_script[i].innerHTML;
  const regex = /subscription_target_id/;
  if (regex.test(script)) {
    const regex2 = /"subscription_target_id":"(\d+)"/;
    const match = regex2.exec(script);
    alert("post id is " + match[1]);
  }
}

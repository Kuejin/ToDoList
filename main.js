// API 불러오기
let news = [];
const getLatestNews =async()=>{ //async와 await은 세트다!
	let url = new URL(
		`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`
	);
	let header = new Headers({
		'x-api-key':'PP80CKQa36quprBlJ3XlhCGtcFJvuP4fngkktOVRHqQ'
	});
	let response = await fetch(url,{headers:header}) // ajax, http, fetch 등을 사용해서 보낼 수 있음
	let data = await response.json();
	news = data.articles;
	console.log(news);
};
getLatestNews();

// 자바스크립트에서 API를 어떻게 불러오는지를 이해해야한다.
// console.log(1)
// setTimeout(()=>{console.log(2)},2000) // 2초를 대기시킨 후 2를 출력하겠다.
// console.log(3)
// 1 3 2 로 출력된다. 자바스크립트의 특성때문에!
// setTimeOut, eventListner 등과 같은 애들은 바로 처리가 안되므로, 순서를 넘기고 나서 다시 실행!
// 근데 만약에 1 2 3 을 썼는데, 2번이 실행이 돼야 3번이 실행되는 경우엔 에러가 뜨잖아..?
// 그런 경우엔, async나 await 사용해서 3번을 기다리게 해주면 되지!
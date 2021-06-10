const sendNotification = async () => {
	let data = await window.OneSignal.getUserId();
	fetch('https://onesignal.com/api/v1/notifications', {
		method: 'POST',
		body: JSON.stringify({
			app_id: 'cf3dfb9a-f44e-4ec1-86c5-b36647660810',
			contents: { en: 'Teacher is On Leave' },
			include_player_ids: [data],
			isAnyWeb: true,
			headings: { en: 'Message From Livesloka' },
			url: 'https://livesloka-web-push.herokuapp.com?_osp=do_not_open',
		}),
	});
};


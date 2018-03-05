
// create by ������ 20151228

// ��Ӱٶȵ�ͼ
// address: ��ַ
// id: ��ͼ����

function add_bd_map(address, id){  //address:��ַ
	var map = new BMap.Map(id); 
    map.centerAndZoom("�Ϻ�", 12);
    map.enableScrollWheelZoom();    //���ù��ַŴ���С��Ĭ�Ͻ���
    map.enableContinuousZoom();    //���õ�ͼ������ק��Ĭ�Ͻ���
    map.addControl(new BMap.NavigationControl());  //���Ĭ������ƽ�ƿؼ�
    map.addControl(new BMap.OverviewMapControl()); //���Ĭ�����Ե�ͼ�ؼ�
    map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));   //���½ǣ���
    var localSearch = new BMap.LocalSearch(map);
    localSearch.enableAutoViewport(); //�����Զ����ڴ����С
    function searchByStationName() {
        map.clearOverlays();//���ԭ���ı�ע
        var keyword = address;
        localSearch.setSearchCompleteCallback(function (searchResult) {
            var poi = searchResult.getPoi(0);
            // document.getElementById("result_").value = poi.point.lng + "," + poi.point.lat;
            map.centerAndZoom(poi.point, 18);
            var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // ������ע��ΪҪ��ѯ�ĵط���Ӧ�ľ�γ��
            map.addOverlay(marker);
            // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //�����Ķ���
        });
        localSearch.search(keyword);
    }
    searchByStationName();
};
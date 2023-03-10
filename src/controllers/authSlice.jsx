useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log("Ini datanya", res);
        setData(res.data.data[0]);
        const tanggal = new Date(res.data.data[0].tanggal_lahir);
        const hari = new Date(tanggal).getDate();
        const bulan = new Date(tanggal).getMonth();
        const tahun = new Date(tanggal).getFullYear();
        const formattgl = hari + " / " + bulan + " / " + tahun;
        setTgl(formattgl);
        setGambar(res.data.data[0].UploadBerka);
      });
  }, []);
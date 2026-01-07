      const provider = new GoogleAuthProvider();
      provider.addScope('email');
      provider.addScope('profile');
      provider.setCustomParameters({
        hd: 'pathoslogos.co.jp',
      });
      を利用して制限を掛けてください。
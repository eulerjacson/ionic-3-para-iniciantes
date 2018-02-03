import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public objetoFeed = {
    titulo:"Euler Bezerra",
    data:"November 5, 1955",
    descricao:"Estou criando um app incrivel...",
    qntdLikes:12,
    qntdComments:4,
    timeComment:"12h ago"
  };

  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider
    ) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    //alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatesMoovies().subscribe(data => {
      this.lista_filmes = data['results'];
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}

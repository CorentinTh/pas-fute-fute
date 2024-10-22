import { getUniqueRandomQuote } from '@pas-fute-fute/data';
import { createSignal, Suspense } from 'solid-js';
import { Button } from '~/components/button';
import { Card, CardHeader } from '~/components/card';
import { useCopy } from '~/libs/copy';

export default function Home() {
  const [getQuote, setQuote] = createSignal(getUniqueRandomQuote().quote);
  const refreshQuote = () => setQuote(getUniqueRandomQuote().quote);

  const { copy, getIsJustCopied } = useCopy(getQuote);

  return (
    <main>

      <div class="max-w-800px mx-auto ">
        <Card class="text-center text-lg w-full">
          <CardHeader>
            <Suspense fallback="&nbsp;">
              {getQuote()}
            </Suspense>
          </CardHeader>
        </Card>

        <div class="mt-4 flex gap-2 flex-col sm:flex-row justify-between">
          <Button
            variant="secondary"
            onClick={copy}
          >
            {getIsJustCopied()
              ? (
                  <>
                    <div class="i-tabler-check mr-2 text-primary" />
                    Citation copiée!
                  </>
                )
              : (
                  <>
                    <div class="i-tabler-copy mr-2" />
                    Copier la citation
                  </>
                )}
          </Button>

          <Button onClick={refreshQuote}>
            <div class="i-tabler-refresh mr-2" />
            Une autre citation aléatoire
          </Button>
        </div>

      </div>

      <hr class="my-32" />

      <div class="prose mx-auto max-w-800px text-base">

        <h2 id="a-propos-de-pasfutefute">À propos de PasFuteFute</h2>
        <p>
          <strong>PasFuteFute</strong>
          {' '}
          est un projet dédié aux expressions françaises amusantes et imagées pour décrire quelqu&#39;un de manière polie mais taquine. De
          {' '}
          <em>&quot;bête à manger du foin&quot;</em>
          {' '}
          à
          {' '}
          <em>&quot;il n&#39;a pas la lumière à tous les étages&quot;</em>
          , ces expressions font partie du riche patrimoine linguistique français. Sur ce site, vous trouverez une collection grandissante de ces perles du langage courant.
        </p>
        <h3 id="origine-des-expressions">Origine des expressions</h3>
        <p>
          Les expressions françaises pour parler des moins fute·e·s ont souvent des racines historiques ou culturelles. Par exemple, l&#39;expression
          <strong>&quot;bête à manger du foin&quot;</strong>
          {' '}
          est une métaphore qui compare une personne à un animal peu intelligent, mangeant sans se poser de questions. Ces expressions apportent souvent une touche d&#39;humour et permettent d&#39;exprimer des vérités parfois désagréables de façon adoucie.
        </p>
        <h3 id="pourquoi-utiliser-ces-expressions-">Pourquoi utiliser ces expressions ?</h3>
        <p>
          Ces expressions permettent de parler de l&#39;intelligence ou du comportement de quelqu&#39;un sans être trop direct·e ou blessant·e. Elles ajoutent du charme et de la finesse à une conversation, et certaines d&#39;entre elles sont devenues tellement ancrées dans la culture qu&#39;elles sont utilisées presque sans y penser. Que ce soit pour une blague entre amis ou pour éviter un commentaire trop frontal,
          <strong>les expressions de PasFuteFute</strong>
          {' '}
          sont là pour vous inspirer.
        </p>
        <h3 id="contribuez-pasfut-fut-">Contribuez à PasFuteFute</h3>
        <p>
          Vous connaissez une expression ou une citation qui n&#39;est pas encore présente sur le site ? Vous pouvez contribuer en soumettant vos propres trouvailles via notre
          <a href="https://github.com/votre-utilisateur/pas-fute-fute">page GitHub</a>
          . Chaque contribution aide à enrichir ce répertoire unique des expressions françaises.
        </p>

      </div>

    </main>
  );
}

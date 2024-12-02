abstract class VoteSystem {
    protected votes: Record<string, number> = {};

    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`Voto registrado para "${candidate}".`);
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`Voto registrado para "${candidate}".`);
    }

    getResults(): object {
        const sorted = Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1])
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {} as Record<string, number>);
        return sorted;
    }
}

const eleicao = new Election();
eleicao.voteFor("Alice");
eleicao.voteFor("Bob");
eleicao.voteFor("Alice");
console.log(eleicao.getResults());

const enquete = new Poll();
enquete.voteFor("Carla");
enquete.voteFor("Danilo");
enquete.voteFor("Carla");
console.log(enquete.getResults());
